import ProjectPreview from "@/components/projectPreview";
import React from "react";
import "@/global.css";
import "@/app/full.css" 
import Image from "next/image";



type Props = {
    params: { slug: string }
}


async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/portfolio/${slug}`, {
			cache: "no-store",	
		})

		if (!res.ok) {
			throw new Error("Failed to fetch portfolio");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function ProjectPost({ params }: Props) {
  const { slug } = params
  const projectPost = await getBlog(slug)
    return (
      <div>
        <main>
          <main className="main">
            <div className="title" id="portfolio">
              <h1>{projectPost?.title}</h1>
            </div>
            <div className="image" id="portfolio">
              <Image src={`/images/${projectPost?.image}`} alt="temp" height="500" width="500"/> 
            </div>

            <div className="content" id="portfolio">
              <p>{projectPost?.content}</p>
            </div>
          </main>
          <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
        </main>
      </div>
    );
  }