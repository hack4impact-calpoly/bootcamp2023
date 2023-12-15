import Image from "next/image";
import "./globals.css";
import BlogPreview from "./components/blogPreview";
import blogs from "/Users/kellybecker/Desktop/Hack4Impact/bootcamp-project-2023/bootcamp-milestone-2/src/app/blogData";

// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
    <div>
      <main>
        <h1 className="page-title">Kelly Becker's Website</h1>
        <div className="about">
          <div className="about-image">
            <Image
              src={"/dogphoto.jpg"}
              width={500}
              height={200}
              alt="Dog Image"
            ></Image>
          </div>
          <div className="about-text">
            <p>
              Hello! My name is Kelly Becker and I am a fourth year CS student
              at Cal Poly SLO!
            </p>
            <p>In my free time, I like hiking, reading and cooking!</p>
          </div>
        </div>
        {blogs.map(
          (blog) => (
            <BlogPreview
              name={blog.name}
              description={blog.description}
              image={blog.image}
              posted={blog.posted}
              text={blog.text}
            />
          ) // This is how we call the component
        )}
      </main>
      <footer className="footer">
        © 2023 Kelly Becker| All Rights Reserved
      </footer>
    </div>
  );
}
