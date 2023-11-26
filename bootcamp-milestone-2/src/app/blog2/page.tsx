
  import Image from 'next/image';

  export default function Blogs() {
      return (<main>
          <h1 className="page-title">Must Watch Halloween Movies</h1>
        <h2 className="section-title">Date: 10-24-2023</h2>
          <Image src= "/Halloween.png" alt="Halloween Movies." width="400" height="300" />
        <p className="entry-info">
          Hi! This is my second blog post.
        </p>
      </main>)
    }