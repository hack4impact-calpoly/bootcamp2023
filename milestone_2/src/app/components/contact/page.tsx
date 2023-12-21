'use client';

async function handleSumbit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  try {
    //get form submission event
    const formElement = e.target as HTMLFormElement;

      // Access values directly from the form elements
      const nameInput =
        formElement.querySelector<HTMLInputElement>(
          'input[name="name"]'
        );
      const emailInput = 
        formElement.querySelector<HTMLInputElement>(
          'input[name="email"]'
        );
      const messageInput = 
        formElement.querySelector<HTMLInputElement>(
          'input[name="message"]'
        );

    const data = {
    service_id: 'logans_service',
    template_id: 'logans_template',
    user_id: 'Hk3K3DSMFdE7S_y-x',
    template_params: {
        'user_name': nameInput?.value || "",
        'user_email': emailInput?.value || "",
        'message': messageInput?.value || ""
      }
    };  

    console.log(data)

    await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': "application/json" }
    }).then(function() {
      alert('Your mail is sent!');
    })

    //clear form data
    if (nameInput) nameInput.value = "";
    if (emailInput) emailInput.value = "";
    if (messageInput) messageInput.value = "";

  } catch (err) {
    alert('Oops... ' + JSON.stringify(err));
  }
}

// export default function Contact() {
//   return (<main>
//     <h1 className="page-title">Contact</h1>
//         <form id="contact-form">
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name"></input>
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email"></input>
//             <label htmlFor="message">Message</label>
//             <textarea></textarea>
//             <input type="submit"></input>
//         </form>
//   </main>)
// }

export default function Contact() {
  return (<main>
    <h1 className="page-title">Contact</h1>
    <form  onSubmit={handleSumbit}>
            <section>
              <input type="text" name="name" id="name" placeholder="Name" required/>
              <input type="text" name="email" id="email" placeholder="Email" required/>
              <input type="text" name="message" id="message" placeholder="Message" required/>
            </section>
          <section>
            <input type="submit" name="submit" id="submit"/>
          </section>
        </form>
  </main>)
}