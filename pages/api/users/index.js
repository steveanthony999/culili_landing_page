import dbConnect from '../../../util/dbConnect';
import User from '../../../models/User';
import { subscribeNewsletter } from '../send-newsletter';
import { sendWelcomeEmail } from '../send-welcome';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { email, firstName, updatesOptIn, ...otherData } = req.body;

        if (updatesOptIn) {
          try {
            await subscribeNewsletter(email);
          } catch (error) {
            console.error('Newsletter subscription error:', error);
          }
        }

        const user = await User.findOneAndUpdate(
          { email },
          { $set: otherData },
          {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
          }
        );

        try {
          await sendWelcomeEmail(email, firstName);
        } catch (error) {
          console.error('Resend welcome email error:', error);
        }

        res.status(201).json({ success: true, data: user });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
