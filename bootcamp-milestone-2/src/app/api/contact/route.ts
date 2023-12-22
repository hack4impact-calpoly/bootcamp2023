import emailjs from '@emailjs/browser';
import { NextRequest, NextResponse } from "next/server"

interface EmailBody {
  name: String;
  email: String;
  message: String;
}

export async function POST(req: NextRequest) {
	const emailBody: EmailBody = await req.json();
	const { name, email, message } = emailBody;
	if (!name || !email || !message) {
		return NextResponse.json("Invalid email body", { status: 400 });
	}

	try {
    const params = {
      from_name: "Daniel",
      email,
      to_name: name,
      message
    };

    emailjs.send('service_e5ga4ua', 'service_e5ga4ua', params, 'RqBC9V4eDNs8EV8O_').then((res) => {

    })
	} catch (err) {	
		console.log(err);
		return NextResponse.json("An error occured", { status: 500 });
	}
}