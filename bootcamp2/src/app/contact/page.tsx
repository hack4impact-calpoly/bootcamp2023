import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
    return(  
        <main className = {styles.main}> 
            <div className={styles.contact_header}><h2>Contact Page</h2></div>
            <form className = {styles.form} id = "styles.contact-form"> 
                <label className = {styles.label} htmlFor="name">Name</label>
                <input className = {styles.input} type = "text" id = "name"/>
                <label className = {styles.label} htmlFor="email">Email</label>
                <input className = {styles.input} type = "email" id = "email"/>
                <label className = {styles.label} htmlFor ="comments">Comments</label>
                    <textarea
                        className = {styles.textarea}
                        id = "comments"
                        name = "comments"
                        placeholder = "Comments"
                        required
                    ></textarea>
                    <input className = {styles.input} type = "submit" value = "Submit" />
            </form>
        </main>
           
            
    )
}