import React from "react";

interface FormProps {
    onSubmit: (data: FormData) => void;
  }
  
  interface FormData {
    name: string;
    email: string;
    message: string;

  }

  interface UserData {
    name: string;
    email: string;
    message: string;
  }

  export const Form = ({onSubmit}: FormProps) => {
    const [formData, setFormData] = React.useState<UserData> ({name: '', email: '', message: ''})
  }
  
   function Form1({ onSubmit }: FormProps) {
    const [formData, setFormData] = React.useState<FormData>({ name: '', email: '', message: ''});
  
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }
  
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      onSubmit(formData);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
            Message:
            <input type="text" name="message" value={formData.email} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }