import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="text-white">
        <ul>
          <li className="text-2xl hover:underline py-1.5 hover:scale-125">
            <Link href="/">Home</Link>
          </li>
          <li className="text-2xl hover:underline py-1.5 hover:scale-125">
            <Link href="/blogs">Blog</Link>
          </li>
          <li className="text-2xl hover:underline py-1.5 hover:scale-125">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="text-2xl hover:underline py-1.5 hover:scale-125">
            <Link href="/resume">Resume</Link>
          </li>
          <li className="text-2xl hover:underline py-1.5 hover:scale-125">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
  