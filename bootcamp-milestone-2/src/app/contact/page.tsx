"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import React from "react";
import axios from 'axios';

//type MyState = {name: string, email: string, message: string}
class Contact extends React.Component<
  {},
  { name: string; email: string; message: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = { 
      name: "input text here",
      email: "input text here",
      message: "input text here"
    };
    console.log(this.state);

  }

  render() {
    return (
      <>
        <nav className="navbar">
          <h1 className="Leila">
            <a href="/home"> personal website </a>
          </h1>
          <ul className="nav-list">
            <Link href="/home"> Home |</Link>
            <Link href="/blogs"> Blog |</Link>
            <Link href="/portfolio"> Portfolio |</Link>
            <Link href="/resume"> Resume |</Link>
            <Link href="/contact"> Contact </Link>
          </ul>
        </nav>
        <div className="Contact">
          <h1 className="page-title"> Contact </h1>

          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address: </label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message: </label>
              <textarea
                className="form-control"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

      </>
    );
  }
  onNameChange(event: { target: { value: any } }) {
    this.setState({ name: event.target.value });
  }
  onEmailChange(event: { target: { value: any } }) {
    this.setState({ email: event.target.value });
    console.log("I'm here: ", this.state);
  }
  onMessageChange(event: { target: { value: any } }) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(event: any) {
    console.log("I'm here: ", this.state);
    event.preventDefault();
    fetch("http://localhost:3001/send", {
      method: "POST",
      body: JSON.stringify(this.state), // where the error is!
      headers: {
        Accept: "application/state.json",
        "Content-Type": "application/state.json",
      }
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }
  resetForm() {
    this.setState({
      name: "input text here",
      email: "input text here",
      message: "input text here"
    });
  }
}
export default Contact;