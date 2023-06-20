const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const { hashPassword, comparePassword } = require("../utils/bcrypt.util.js");
const { mg } = require("../utils/mailgun.util.js");

async function me(req, res) {
  try {
    res.json(req.user);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function forgotPassword(req, res) {
  try {
    // Get email from request body
    const { email } = req.body;
    if (!email) {
      throw "Email is required";
    }

    // Find user with email
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      throw "User with this email does not exist";
    }

    // Create reset token with user id in payload
    const resetToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    // Prepare email data
    const data = {
      from: "mailgun@" + process.env.MAILGUN_DOMAIN,
      to: email,
      subject: "Password Reset Link",
      text: ``,
      html: `
        Please use this token to reset your password: <b>${resetToken}</b>
      `,
    };

    // Send email to user with reset link
    await mg.messages.create(process.env.MAILGUN_DOMAIN, data);

    // Send email sent message
    res.send({ message: "Password reset link sent to email" });
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function resetPassword(req, res) {
  try {
    // Get reset token and new password from request body
    const { resetToken, newPassword } = req.body;
    if (!resetToken || !newPassword) {
      throw "Invalid reset token or new password";
    }

    // Verify & decode token and get user id from payload
    const decoded = jwt.verify(resetToken, process.env.SECRET_KEY);

    // Hash new password
    const hashedPassword = hashPassword(newPassword);

    // Update user password
    await User.update(
      {
        password: hashedPassword,
      },
      {
        where: {
          id: decoded.id,
        },
      }
    );

    // Send success message
    res.send({ message: "Password reset successful" });
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function register(req, res) {
  try {
    // Check if the user with the same email already exist
    const userExist = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (userExist) throw "User already exist.";

    // Create user using data from request body.
    // Request body must contain all required fields defined in User model.
    const hashedPassword = hashPassword(req.body.password);
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
      isEmailVerified: false,
    });

    // Generate JWT
    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    // Prepare email data
    const data = {
      from: "kaiz@" + process.env.MAILGUN_DOMAIN,
      to: user.email,
      subject: "Account Verification Link",
      html: `
        Please click on this link to verify your account: 
        <a href="http://${req.header('Host')}/auth/verify?token=${token}">Verify Account</a>
      `,
    };

    // Send email to user with verification link
    await mg.messages.create(process.env.MAILGUN_DOMAIN, data);

    // Send created user as response.
    res.json(user);
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function verify(req, res) {
  try {
    const { token } = req.query;
    if (!token) {
      throw "Invalid verification token";
    }

    // Verify & decode token and get user id from payload
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Update user's isEmailVerified to true
    await User.update(
      {
        isEmailVerified: true,
      },
      {
        where: {
          id: decoded.id,
        },
      }
    );

    // Send success message
    res.send({ message: "Account verification successful" });
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

async function login(req, res) {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!email && !password) {
      // This will go to the catch block
      throw "Email and password are required";
    }

    // Validate if user exist in our database
    const user = await User.findOne({ where: { email } });

    // If user exist then validate password
    const passwordMatch = comparePassword(password, user.password);

    if (!passwordMatch) {
      // This will go to the catch block
      throw "Invalid login credentials";
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
        algorithm: "HS256",
      }
    );

    res.status(200).json({ accessToken: token });
  } catch (error) {
    // If there is any error, send error as response.
    res.status(500).json({ error: error });
  }
}

module.exports = {
  me,
  forgotPassword,
  resetPassword,
  register,
  verify,
  login,
};
