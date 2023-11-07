import React from "react"
import Image from 'next/image'

export default function Blog1() {
    return (
        <>
            <main>
            <div className="content">
                <br></br>
                Title: Blog#1<br></br>
                Date: 2/2/2024<br></br>
                <Image src={"/blogimg.jpeg"} alt={"Picture of blog"} height={200} width={200}></Image>
                HI, this is a blog bla bla bla
            </div>
            </main>
            <footer className="footer">© 2023 My Website | All Rights Reserved</footer>
        </>
    )
  }
  