import styles from './page.module.css'
import BlogPreview from '@/components/blogPreview';
import Link from "next/link";

export default function Home() {
    return(  
        <main className = {styles.main}>
        <h2>Milestone 1</h2>
        <h3>Date: 10/21/2023</h3>
        <p>Started to integrate javascript and typescript into my 
            website for increased functionality. So far so good!
        </p>
        <img className = "weird_plant" src="plant.JPG" alt = "plant" width = "500" height = "500"/>
        </main>
    )
}

