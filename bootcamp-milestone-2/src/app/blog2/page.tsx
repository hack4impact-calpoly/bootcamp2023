import React from "react"
import Image from 'next/image'

export default function Blog2() {
    return (
        <>
            <main>
            <div className="content">
                <br></br>
                Title: Blog#2<br></br>
                Date: 12/22/2023<br></br>
                <br></br>
                <Image src={"/blogimg2.jpeg"} alt={"Picture of blog"} height={200} width={200}></Image><br></br>
                Hello there, this is another blog bla bla bla.
            </div>
            </main>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  