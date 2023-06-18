# Instructions

[Slides](https://docs.google.com/presentation/d/1AR5mUKeqLpm44C9Ngq2D4X85puZ7fQ3V/edit?usp=sharing&ouid=109782457486090270210&rtpof=true&sd=true)

## Topics To Be Self-Covered: N/A

## Task of the Day: [Starter Code](./task-management-api-mailgun/)

Task of the Day: Send an email verification link to the user's email address when they sign up.

- By default, all new users should have their email unverified in the database.
- When a user signs up, send an email verification link to their email address.
- When the user clicks on the email verification link, it should update the user's email to verified in the database.

## Take Home Tasks

1. Implement a Notification System:
   - When a user changes their password, send an email to their email address notifying them that their password has been changed.
   - When a project is assigned to a manager, send an email to the manager's email address notifying them that a project has been assigned to them.
   - When a task is assigned to a employee, send an email to the employee's email address notifying them that a task has been assigned to them.
   - When a task is completed, send an email to the employee's email address and the manager's email address notifying them that the task has been completed.
2. Use email templates to send emails to users. Basically, instead of sending plain text emails, you can send emails with HTML content. This will make your emails look more professional. You can find email templates [here](https://www.mailgun.com/resources/tools/email-templates/).

## References

- [Mailgun Documentation](https://documentation.mailgun.com/en/latest/)
- [Sending Emails with Mailgun in Node.js](https://documentation.mailgun.com/en/latest/quickstart-sending.html)  
  Choose Node.js in the code sample preference at the top of the page
- [Mailgun Email Templates](https://www.mailgun.com/resources/tools/email-templates/)
- [Adding Custom Domain in Mailgun](https://documentation.mailgun.com/en/latest/user_manual.html#verifying-your-domain)
