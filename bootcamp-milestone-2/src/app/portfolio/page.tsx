import Image from 'next/image';
import Link from "next/link";

export default function Portfolio() {
    return (<main>
      <h1 className="page-title">Portfolio</h1>
          <div className="project">
              <Link href= "/">
                  <Image className="project-image" src="/screenshot.png" alt="Screenshot" width="400" height="400"></Image>
              </Link>
          </div>
    </main>)
  }