import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const formData = await req.json();
    if (!formData) {
      return NextResponse.json({ error: "No data provided" }, { status: 400 });
    }
    var template_params = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    const response = await axios.post(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: template_params,
        accessToken: process.env.EMAILJS_PRIVATE_KEY,
      }
    );
    if (response.status === 200) {
      return NextResponse.json(
        { message: "Message sent successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "Message not sent" }, { status: 500 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
