import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/browser";
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

    console.log(template_params);
    const response = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || "",
      process.env.EMAILJS_TEMPLATE_ID || "",
      template_params,
      process.env.EMAILJS_USER_ID
    );
    console.log(response);
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
