import "../../global.css";
import { IParams } from "../../api/portfolio/[slug]/route";
import connectDB from "@/helpers/db";
import Comment from "../../../components/commentPreview";
import { IComment } from "@/database/portfolioSchema";
import { Key } from "react";
import Image from "next/image";
import style from "../../home.module.css";
import dynamic from "next/dynamic";

import CommentForm from "../../../components/CommentFormPortfolio";

async function getPortfolio(slug: string) {
  try {
    
    const url = `https://bootcamp-project-2023-taupe.vercel.app/api/portfolio/${slug}`;
    console.log('URL: ' + url);

    const res = await fetch(url, {
      cache: "no-store",
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error("Failed to fetch portfolio");
    }

    return data;
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

// ... (existing imports)

export default async function Portfolio(params: IParams) {
  const slug: string = params.params.slug;
  const portfolio = await getPortfolio(slug);

  if (portfolio) {
    const centerStyles: React.CSSProperties = {
      textAlign: "center",
    };

    const contentStyles: React.CSSProperties = {
      whiteSpace: "pre-line",
      marginLeft: "100px",
      maxWidth: "800px", // Adjust the maximum width as needed
      margin: "0 auto",
      marginTop: "20px",
      marginBottom: "20px",
    };

    return (
      <div>
        <div style={contentStyles}>
          <div className={style.about}>
            <div className={style.abouttext}>
              <h1>{portfolio.title}</h1>
              <p>Date: {new Date(portfolio.date).toLocaleDateString()}</p>

              <div>
                <p>{portfolio.description}</p>

                <Image
                  src={"/" + portfolio.image}
                  alt="img"
                  width={600}
                  height={400}
                ></Image>

                <h2>Comments</h2>
                <div>
                  {Array.isArray(portfolio.comments) ? (
                    portfolio.comments.map((comment: IComment, index: number) => (
                      <Comment key={index} comment={comment} />
                    ))
                  ) : (
                    <p>No comments available.</p>
                  )}

                  <CommentForm
                    usernameprop=""
                    commentTextprop=""
                    portfolioSlug={slug}
                  ></CommentForm>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer}>
          <footer>
            © 2023 My Personal Website | All Rights Reserved | Made with love ♥
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>portfolio not found.</p>
      </div>
    );
  }
}
