"use client";
import React from "react";
import style from "./addComments.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  user: string;
  comment: string;
};

type IParams = {
  params: {
    slug: string;
    type: string;
  };
};

export default function AddComments({ params: { slug, type } }: IParams) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log(data);
    try {
      const res = await fetch(
        `http://localhost:3000/api/${type}/${slug}/comment`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch blog");
      }
    } catch (err: unknown) {
      console.log(`error: ${err}`);
      return null;
    }
    reset();
  };

  return (
    <div className={style.add_comment_container}>
      <h4 className={style.comment_header}>Add Comment</h4>
      <form
        className={style.add_comment_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("user", { required: true })}
          placeholder="Name"
          className={style.form_input_name}
        />
        {errors.user && <span>This field is required</span>}
        <input
          {...register("comment", { required: true })}
          placeholder="Enter your comment..."
          className={style.form_input_comment}
        />
        {errors.comment && <span>This field is required</span>}
        <input type="submit" className={style.form_submit_button} />
      </form>
    </div>
  );
}
