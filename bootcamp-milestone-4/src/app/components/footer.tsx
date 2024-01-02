import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white mt-auto">
      <div className="container pt-5">
        <h6>© 2023 Lindsay Minami - Hack4Impact | All Rights Reserved </h6>
        <h6>Email: <span>lminami@calpoly.edu</span></h6>
      </div>
      <div className="container p-4">
          <Link href="https://www.linkedin.com/in/lindsay-minami-990041254" target="_blank" className="btn btn-link btn-floating btn-lg text-light m-1" role="button" data-mdb-ripple-color="light"><img style={{height: "20px", width: "20px"}} src="assets/icons/link.png"/></Link>
          <Link href="https://open.spotify.com/user/lminami96" target="_blank" className="btn btn-link btn-floating btn-lg text-light m-1" role="button" data-mdb-ripple-color="light"><img style={{height: "20px", width: "20px"}} src="assets/icons/spotify.png"/></Link>
          <Link href="https://www.instagram.com/linds.minami/?hl=en" target="_blank" className="btn btn-link btn-floating btn-lg text-light m-1" role="button" data-mdb-ripple-color="light"><img style={{height: "20px", width: "20px"}} src="assets/icons/insta.png"/></Link>
          <Link href="https://github.com/FlowerCake13" target="_blank" className="btn btn-link btn-floating btn-lg text-light m-1" role="button" data-mdb-ripple-color="light"><img style={{height: "20px", width: "20px"}} src="assets/icons/github.png"/></Link>
      </div>
    </footer>
  );
}