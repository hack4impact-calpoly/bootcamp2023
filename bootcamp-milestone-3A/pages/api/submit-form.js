import projCommentSchema from '@/database/projectCommentSchema';
import connectDB from "@/helpers/db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { Name, Message } = req.body;

      // Connect to MongoDB
      await connectDB();

      const projComment = new projCommentSchema({
        user: Name,
        comment: Message,
      });

      // Save projComment to the database
      await projComment.save();

      return res.status(201).json({ success: true, message: 'projComment added successfully' });
    } catch (error) {
      console.error('Error creating projComment:', error);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ success: false, message: 'Method Not Allowed' });
}