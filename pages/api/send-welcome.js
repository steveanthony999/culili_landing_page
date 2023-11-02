import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email, firstName) {
  try {
    const data = await resend.emails.send({
      from: 'Culili <steve@culili.com>',
      to: [email],
      subject: 'Welcome to Culili',
      react: EmailTemplate({ firstName: firstName }),
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
