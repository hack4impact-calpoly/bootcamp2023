import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="text-white">
        <h1 className="py-1 text-4xl font-semibold">Asarel Castellanos</h1>
        <h2 className="py-1 text-[#CED4DA] text-2xl font-semibold">Software Engineer</h2>
        {/* <p className="py-1.5 text-[#adb5bd] font-light">Focused on building accessible products for the web.</p> */}
        <ul className="mt-20">
          <li className="pt-2 font-semibold uppercase transition duration-150 ease-out hover:ease-in hover:scale-110">
            <Link href="/">Home</Link>
          </li>
          <li className="pt-2 font-semibold uppercase transition duration-150 ease-out hover:ease-in hover:scale-110">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className="pt-2 font-semibold uppercase transition duration-150 ease-out hover:ease-in hover:scale-110">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="pt-2 font-semibold uppercase transition duration-150 ease-out hover:ease-in hover:scale-110">
            <Link href="/resume">Resume</Link>
          </li>
          <li className="pt-2 font-semibold uppercase transition duration-150 ease-out hover:ease-in hover:scale-110">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    )
  }
  