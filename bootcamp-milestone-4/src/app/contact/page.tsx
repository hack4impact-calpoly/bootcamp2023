"use client";
import style from "./contact.module.css";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    try {
      const res = await fetch(`${process.env.BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        alert("Message sent successfully");
        reset();
      } else {
        alert("Message not sent");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className={style.title}>Contact</h1>

      <div className={style.contact_container}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.contact_form}>
          <input
            className={style.form_input_name}
            type="text"
            placeholder="name"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}

          <input
            className={style.form_input_email}
            type="email"
            id="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}

          <textarea
            className={style.form_input_message}
            placeholder="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && <span>This field is required</span>}
          <input className={style.submit} type="submit" />
        </form>
      </div>
    </>
  );
}
