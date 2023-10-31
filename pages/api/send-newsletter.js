const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const post = req.body;

  const msg = {
    to: 'steveanthony999@gmail.com',
    from: 'steve@culili.com',
    templateId: process.env.SENDGRID_NEWSLETTER_ID,
    dynamic_template_data: {
      subject: `New Blog Post: ${post.title}`,
      postTitle: post.title,
      postContent: post.content,
    },
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
