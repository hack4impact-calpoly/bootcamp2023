import BlogPreview from "@/components/blogPreview";
import React from "react";


type Props = {
    params: { slug: string }
}


async function getBlog(slug: string) {
	try {
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})


		if (!res.ok) {
      console.log(res)

      console.log(`TESTSTST${slug}`)

			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
	}
}

export default async function BlogPost({ params }: Props) {
  const { slug } = params
  const blog = await getBlog(slug)

    return (
      <div>
        <main>
          <main className="main">
            <div className="content" id="blog">
              <p> ${slug}</p>
              <p>${blog}</p>
            </div>
          </main>
          <footer>© 2023 Dhanvi Ganti | All Rights Reserved</footer>
        </main>
      </div>
    );
  }