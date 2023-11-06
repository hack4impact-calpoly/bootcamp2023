import styles from './page.module.css'
import BlogPreview from '@/components/blogPreview';
import Link from "next/link";

export default function Home() {
    return(  
        <main className = {styles.main}>
            <h2>Ledger System for 365</h2>
            <h3>Date: 10/21/2023</h3>
            <p>
                Added a ledger system to the potions shop in 365. With this, instead of keeping a <br />
                running total, it will make a sql call that will sum of the changes.This way we can <br />
                see the changes that are being made, instead of just hoping that they're right.
            </p>
            <img className = "berry" src="berry.JPG" alt = "berry" width = "500" height = "750"/>
        </main>
    )
}

