"use client";
import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  from_name: string;
  email_id: string;
  message: string;
  to_name: string;
}

export default function ContactUs() {
  const [buttonState, setButtonState] = useState("Send Message");

  const formik = useFormik<FormValues>({
    //we have created our initailValues object in a format EmailJS accepts
    initialValues: {
      from_name: "", //user name
      to_name: "aidannesbitt20@gmail.com", //email id of the admin
      email_id: "", // user email
      message: "", // message of email
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("* Name field is required"),
      email_id: Yup.string()
        .email("Invalid email address")
        .required("* Email field is required"),
      message: Yup.string().required("* Message field is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        await emailjs
          .send(
            "service_usd3zbd",
            "template_aapedgz",
            values,
            "M6apdXlayZJ0dtJfq"
          )
          .then(() => {
            setButtonState("Email Sent!");
            setSubmitting(false);
            resetForm();
          });
      } catch {
        setButtonState("Send Email");
        setSubmitting(false);
      }
    },
  });

  //the formik class names probably don't exactly fit typescript, fix these.
  //update class of button (to change color) if email sent
  //
  return (
    <div className={styles.componentContainer}>
      <h3 className={styles.header}>Send Me an Email!</h3>
      <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
        <label htmlFor="from_name" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          name="from_name"
          id="from_name"
          autoComplete="off"
          className={styles.inputText}
          onChange={formik.handleChange}
          value={formik.values.from_name}
        />
        <div
          className={`expandable ${
            formik.touched.from_name && formik.errors.from_name ? "show" : ""
          }`}
        >
          {formik.errors.from_name}
        </div>
        <label htmlFor="email_id" className={styles.label}>
          Email
        </label>
        <input
          type="email"
          name="email_id"
          id="email_id"
          autoComplete="off"
          className={styles.inputEmail}
          onChange={formik.handleChange}
          value={formik.values.email_id}
        />
        <div
          className={`expandable ${
            formik.touched.email_id && formik.errors.email_id ? "show" : ""
          }`}
        >
          {formik.errors.email_id}
        </div>
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          autoComplete="off"
          className={styles.inputMessage}
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        <div
          className={`expandable ${
            formik.touched.message && formik.errors.message ? "show" : ""
          }`}
        >
          {formik.errors.message}
        </div>
        <button
          disabled={formik.isSubmitting}
          type="submit"
          className={styles.inputSubmit}
        >
          <span>{buttonState}</span>
        </button>
      </form>
    </div>
  );
}
