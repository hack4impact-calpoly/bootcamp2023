import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        // replace everything in between the <header> & <header /> tags
        // with your navbar code from your earlier milestones
        <nav className="navbar">
            <h1 className="logo">Personal Website</h1>
            <ul className="nav-list">
                <li>
                    <Link className="nav-link" href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/blog">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/portfolio">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/resume">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
