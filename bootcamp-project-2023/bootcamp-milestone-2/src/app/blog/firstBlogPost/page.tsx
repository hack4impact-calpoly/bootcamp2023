import breadRolls from "public/breadRollsSquare.png";
import Image from "next/image";

export default function firstBlogPost() {
  return (
    <main className="blogMain">
      <div className="blogsHolder">
        <div className="blogPageInformation">
          <h1 className="pageTitle">First Post!</h1>
          <p className="blogPostDescription">Welcome to my first Blog post!</p>
          <p className="blogPostDate">Date Published: 10/22/23</p>
          <p className="blogPostContent">
            Welcome to my blog, here you will find lot's of information about
            what I am working on and what's going on in my life... Check out
            these bread rolls I made with my friends last week!
          </p>
          <Image
            src={breadRolls}
            alt="Pouring honey over baked breadrolls in a pan with a spoon."
            className="blogPostImage"
          />
        </div>
      </div>
    </main>
  );
}
