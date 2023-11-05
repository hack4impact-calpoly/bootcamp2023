import style from "./contact.module.css"

export default function Contact(){
  return (
    <div>
      <main className={style.mainContact} style={{margin: 'auto'}}>
        <div style={{textAlign: 'center', fontSize: '25px', paddingBottom: '3%', paddingTop: '5%'}}>
          Send Me A Message!
        </div>
        <form className={style.contactForm} action="https://formsubmit.co/d4bfdbfaf27de75625447ad09d769f24" method="POST">
          <div className={style.formGroup}>
            <label htmlFor="name">Name:</label>
            <input name="Name" type="text" id="name" className={style.inputField} />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" className={style.inputField} />
          </div>

          <div className={style.formGroup}>
            <label htmlFor="message-box">Message:</label>
            <textarea name="Message" id="message-box" className={style.textareaField} style={{ color: 'black' }}></textarea>
          </div>

          <div className={style.submitButton}>
            <input type="submit" id="submit" />
          </div>
        </form>
        <div style={{textAlign: 'center', fontSize: '25px', paddingBottom: '3%', paddingTop: '5%'}}>
          More Ways to Connect With Me
        </div>
        <div>
          <div style={{display: 'flex', paddingLeft: '10%'}}>
            <img className={style.contactImages} src="./phone-icon.png" alt="phone icon"/>
            <p style={{paddingTop: '5px', width: 'auto', paddingRight: '45%'}}>
              (831)210-3348
            </p>
            <img className={style.contactImages} src="./mail-icon.png" alt="mail icon"/>
            <p style={{paddingTop: '5px'}}>
              holdenevers@gmail.com
            </p>
          </div>
          <div style={{display: 'flex', paddingLeft: '10%'}}>
            <img className={style.contactImages} src="./linked-in-icon.png" alt="linkedIn icon"/>
            <p style={{paddingTop: '10px', paddingRight: '35%'}}>
              <a href="https://www.linkedin.com/in/holden-evers/">linkedin.com/in/holden-evers</a>
            </p>
            <img className={style.contactImages} src="./git-hub-icon.png" alt="github icon"/>
            <p style={{paddingTop: '10px'}}>
              <a href="https://github.com/HoldenEv">github.com/HoldenEv</a>
            </p>
          </div>
        </div>
      </main>
    </div> 
  )
}