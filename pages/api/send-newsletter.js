const sgMail = require('@sendgrid/mail');
const sgClient = require('@sendgrid/client');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

async function isSubscribed(email) {
  const request = {
    method: 'POST',
    url: '/v3/marketing/contacts/search',
    body: {
      query: `email LIKE '${email}'`,
    },
  };

  try {
    const [response, body] = await sgClient.request(request);
    return body.contact_count > 0;
  } catch (error) {
    console.error(error);
    throw new Error('Error checking subscription status');
  }
}

export async function subscribeNewsletter(email) {
  try {
    if (await isSubscribed(email)) {
      throw new Error('Email is already subscribed');
    }

    const addContactRequest = {
      method: 'PUT',
      url: '/v3/marketing/contacts',
      body: {
        list_ids: [process.env.SENDGRID_LIST_ID],
        contacts: [{ email }],
      },
    };

    await sgClient.request(addContactRequest);

    const msg = {
      to: email,
      from: 'steve@culili.com',
      templateId: process.env.SENDGRID_WELCOME_ID,
      subject: 'Welcome to the Culili Newsletter!',
    };

    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw error;
  }
}
