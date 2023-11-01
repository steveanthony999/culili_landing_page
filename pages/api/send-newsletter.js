const sgMail = require('@sendgrid/mail');

export default async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email } = req.body;

  const msg = {
    to: email,
    from: 'steve@culili.com',
    // templateId: process.env.SENDGRID_NEWSLETTER_ID,
    subject: 'Welcome to Culili Newsletter!',
    templateId: 'd-60ce7ca833a742559bc87e4f93c42626',
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('Email sent');
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }
    res.status(500).send('Internal Server Error');
  }
};
