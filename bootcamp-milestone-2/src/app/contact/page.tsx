"use client"
import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const sendEmail = async (e: any) => {
    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message,
      };

      await emailjs.send(
        'service_dfrwrbc',
        'template_4q1rnvm',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USERID
      );

      setSuccess('Email sent successfully!');
      setError('');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Error sending email. Please try again later.');
      setSuccess('');
      console.log(err);
    }
  };

  return (
    <main className="flex flex-col justify-center">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
          Get In Contact
        </h1>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-white">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                name="name"
                className="w-full bg-[#F8F9FA] rounded border focus:border-[#ADB5BD] focus:bg-white focus:ring-2 focus:ring-[#ADB5BD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-white">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#F8F9FA] rounded border focus:border-[#ADB5BD] focus:bg-white focus:ring-2 focus:ring-[#ADB5BD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-white">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                className="w-full bg-[#F8F9FA] rounded border focus:border-[#ADB5BD] focus:bg-white focus:ring-2 focus:ring-[#ADB5BD] text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-outt"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button onClick={sendEmail} className="flex mx-auto text-white border-0 py-2 px-8 focus:outline-none hover:bg-[#001523] rounded-lg text-lg">
              Submit
            </button>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
      </div>
    </main>
  );
}
