import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/browser";



export async function POST(req: NextRequest, res: NextResponse) {
  try {
    console.log("-1")
    console.log("333")
    const data = await req.json();
    console.log(data)

    console.log("0")

    console.log("1")

    var template = {
        name: data.name,
        email: data.email,
        message: data.message
    }

    var service_id = process.env.service_id
    var template_id = process.env.template_id
    var pub_key = process.env.pub_key
    console.log(template)

    console.log("Service ID:", service_id);
    console.log("Template ID:", template_id);
    console.log("Pub Key:", pub_key);
    emailjs.init(pub_key || "");

    console.log("inbetween")
    //const resp = await emailjs.send(`${service_id}`, `${template_id}`, template, `${pub_key}`);
    
    emailjs.send(service_id || "",template_id || "", template, pub_key)
            .then((response) => {
                console.log("success sent email" , response)
            })
            .catch((error) => {
                console.error('error during email' , error)
            });
    console.log("3")

    if (resp.status === 200) {
        return NextResponse.json("Message successfully sent.", { status: 200})
    }
    else {
        return NextResponse.json("some error lol", {status: 400})
    }
}
catch (err){
    console.log("oopsie")
    return NextResponse.json("some error lol", {status: 400})

}
}
