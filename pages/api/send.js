import { EmailTemplate } from '../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const data = await resend.emails.send({
      from: 'Culili <steve@culili.com>',
      to: ['steveanthony999@gmail.com'],
      subject: 'Welcome to Culili',
      react: EmailTemplate({ firstName: 'John' }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
