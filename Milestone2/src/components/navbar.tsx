import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        // replace everything in between the <header> & <header /> tags
        // with your navbar code from your earlier milestones
        <nav className="navbar">
            <h1 className="logo">Belal Elshenety's Personal Website</h1>
            <ul className="nav-list">
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/portfolio">
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link href="/resume">
                        Resume
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
