import Image from "next/image";

export default function Blog1() {
  return (
    <>
      <main>
        <h1>The Intersection of Arts and Computing</h1>
        <div className="blog-entry">
          <div className="blog1-image">
            <Image
              src={"/virtual_reality.jpg"}
              width={600}
              height={400}
              alt="Oculus Quest 2 headset on white desk with lamp (virtual reality)."
            ></Image>
          </div>
          <h3>
            October 23, 2023 <br />A brief article on virtual, augmented, and
            mixed reality.
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
