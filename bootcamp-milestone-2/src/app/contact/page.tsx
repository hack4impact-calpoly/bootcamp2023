import styles from "./page.module.css"

export default function Home() { 
  return(
        <>
        {/* <div className={styles.contact}> */}
        <h1>Contact</h1>
            <form className={styles.myForm}id="contact-form" autoComplete="off">                       
                <label className={styles.myLabel} htmlFor="name">Name:</label>         
                <input className={styles.myInput} type="text" id="name" name="name"/>
                <label className={styles.myLabel} htmlFor="email">Email:</label>
                <input className={styles.myInput} type="email" id="email" name="email"/>
                <label className={styles.myLabel}>Message:</label>
                <textarea className={styles.myTextArea}></textarea>
                <input type="submit"/>  
            </form>
            <br/>
          {/* </div> */}
          or email me directly at <strong>tsingh33@calpoly.edu</strong>
        </>
  )
}
