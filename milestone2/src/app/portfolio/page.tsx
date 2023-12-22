"use client";
import React from "react";
import connectDB from "@/helpers/db";
import Portfolio from "@/database/portfolioSchema";
import PortfolioPreview from "@/components/portfolio";
import { useState, useEffect } from "react";
import Comment from "@/components/comment";
import Image from "next/image";
type IPortfolio = {
  name: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  comments: [
    {
      user: { type: String; required: true };
      comment: { type: String; required: true };
      time: { type: Date; required: false };
    }
  ];
};

export default function PortfolioComponent() {
  const [portfolio, setPortfolio] = useState<IPortfolio[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPortfolio();
      setPortfolio(data);
    };
    fetchData();
  }, []);
  const [formData, setFormData] = useState({
    user: "",
    comment: "",
    time: new Date(),
  });
  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const addNewComment = async (e: any) => {
    e.preventDefault();
    const comment_user = formData.user;
    const comment = formData.comment;
    const comment_obj = {
      user: comment_user,
      comment: comment,
      time: new Date(),
    };
    if (!comment_user || !comment) {
      alert("Please enter in a username and comment");
      return null;
    }
    try {
      await fetch(`/api/portfolio`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment_obj),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  if (portfolio) {
    return (
      <>
        <h1>{portfolio[0].name}</h1>
        <h1>{portfolio[0].description}</h1>
        <h1>{portfolio[0].content}</h1>
        <Image
          src={portfolio[0].image}
          width={500}
          height={500}
          alt="Homepage"
        ></Image>
        {portfolio &&
          portfolio[0].comments.map((comment: any, index: any) => (
            <Comment key={index} comment={comment} />
          ))}
        <form name="new-comment" onSubmit={(e) => addNewComment(e)}>
          <label>Username</label>
          <input type="text" name="user" onChange={handleInput} />
          <label>Comment</label>
          <textarea name="comment" onChange={handleInput}></textarea>
          <input type="submit" />
        </form>
        <footer className="footer">
          © 2023 Tammy Si&apos;s Personal Website | All Rights Reserved
        </footer>
      </>
    );
  } else {
    <div>
      <h1>Loading</h1>
    </div>;
  }
}

async function getPortfolio() {
  try {
    const res = await fetch(`http://localhost:3000/api/portfolio/`);
    if (!res.ok) {
      throw new Error("Failed to fetch portfolio");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}
