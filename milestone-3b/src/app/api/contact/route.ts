import emailjs from "@emailjs/browser";
import { NextRequest, NextResponse } from "next/server";

interface EmailBody {
  name: String;
  email: String;
  message: String;
}

export async function POST(req: NextRequest) {
  console.log("in POST");
  const emailBody: EmailBody = await req.json();
  console.log(emailBody);
  const { name, email, message } = emailBody;
  if (!name || !email || !message) {
    return NextResponse.json("Invalid email body", { status: 400 });
  }

  try {
    const params = {
      from_name: name,
      email,
      to_name: "Angela",
      message,
    };

    console.log("sending email");
    emailjs
      .send("service_50pz82h", "template_i0hikrb", params, "Hu6SVaz9_Nocul6mr")
      .then((res) => {});

    return NextResponse.json("Email sent successfully", { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json("An error occured", { status: 500 });
  }
}
