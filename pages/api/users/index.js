import dbConnect from '../../../util/dbConnect';
import User from '../../../models/User';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const { email, ...otherData } = req.body;

        const user = await User.findOneAndUpdate(
          { email },
          { $set: otherData },
          {
            new: true,
            upsert: true,
            setDefaultsOnInsert: true,
          }
        );

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
