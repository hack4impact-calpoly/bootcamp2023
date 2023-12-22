"use client";
import style from "./contact.module.css";
import React, { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

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
    console.log(data);
    reset();
  };
  return (
    <div className={style.contact_container}>
      <h1 className={style.page_title}>Contact</h1>
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

        <input
          className={style.form_input_message}
          type="text"
          placeholder="message"
          {...register("message", { required: true })}
        ></input>
        {errors.message && <span>This field is required</span>}
        <input className={style.submit} type="submit" />
      </form>
    </div>
  );
}
