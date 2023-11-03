import Image from 'next/image'
import styles from './page.module.css'
import PageTitle from "@/components/page-title";


export default function Contact() {
  return (
    <div>
    <main>
        <PageTitle title="Contact"/>
        
        <form id="contact-form">

            <input type="text" id="name" placeholder="Name"/>
            <input type="email" id="email" placeholder="Email"/>
            <textarea>
                
            </textarea>
            <input type="submit"/>
        </form>


    </main>
    </div>

  )
}