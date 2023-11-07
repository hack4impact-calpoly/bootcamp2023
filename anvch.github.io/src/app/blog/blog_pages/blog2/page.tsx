import Image from "next/image";

export default function Blog2() {
  return (
    <>
      <main>
        <h1>What My Dance Journey Has Taught Me</h1>
        <div className="blog-entry">
          <div className="blog1-image">
            <Image
              src={"/dance.jpg"}
              width={624}
              height={416}
              alt="People standing on a pink-lit stage dancing"
            ></Image>
          </div>
          <h3>
            October 23, 2023 <br />
            Summarizing my dance journey and what lessons I've learned.
          </h3>
          <div className="blog-text">
            <p>Updating..</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        © 2023 Angela Chen | All Rights Reserved
      </footer>
    </>
  );
}
