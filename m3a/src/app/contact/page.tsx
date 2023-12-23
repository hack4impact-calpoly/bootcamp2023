const Contact = () => {
  return (
    <div>
      <h1 className="page-title">Contact</h1>
      <form id="contact-form">
        <label>Name: </label>
        <input type="text" id="name" />

        <label>Email: </label>
        <input type="email" id="email" />

        <label>Message: </label>
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Contact;
