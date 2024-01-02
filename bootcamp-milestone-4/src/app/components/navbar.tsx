import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand"><b>Lindsay Minami | Hack4Impact</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}