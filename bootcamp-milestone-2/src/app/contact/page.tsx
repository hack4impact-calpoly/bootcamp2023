import style from '../home.module.css';
import "../global.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      

        <main>


            <h2>Contact Me!</h2>
            <div className={style.about}>
            <div className={style.aboutText}>

            <form>
        
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" style={{ width: '450px' }} required />
                <br/><br/>
            
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" style={{ width: '450px' }}/>
                <br/><br/>
                
                <label htmlFor="comments">Message</label>
                <textarea
                id="comments"
                name="comments"
                placeholder="Comments"
                style={{ width: '450px' }}
                required
                ></textarea>
                <br/><br/>
                <input type="submit" value="Submit" />
                
            </form>   
            </div>
            </div>

            <div className={style.footer}>
                <footer>© 2023 My Personal Website | All Rights Reserved | Made with love ♥</footer>
            </div>
        </main>

    </div>
   )
}



