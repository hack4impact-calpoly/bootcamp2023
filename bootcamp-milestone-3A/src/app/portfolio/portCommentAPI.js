// pages/api/submit-form.js
import connectDB from "@/helpers/db";
import ProjCommentModel from "@/database/projCommentSchema";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Name, Message } = req.body;

    await connectDB();

    try {
      // Create a new projComment using the user input
      const newProjComment = new ProjCommentModel({
        user: Name,
        comment: Message,
      });

      // Save the new projComment to MongoDB
      const savedProjComment = await newProjComment.save();

      console.log('ProjComment created successfully:', savedProjComment);

      res.status(201).json({ message: 'ProjComment created successfully!' });
    } catch (error) {
      console.error('Error creating projComment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}