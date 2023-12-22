import React from 'react';

export default function Home() {
    return (<main>
        <div className="container-fluid" style={{textAlign: "center", marginTop: "40px"}}>
            <div id="form-wrapper" className="row justify-content-center align-items-center">
                <div className="form-container col-5" style={{backgroundColor: "#AB947F"}}>
                    <h3><b>Get in Touch!</b></h3>
                    <form>
                        <section>
                            <input type="text" id="name" className="form-input" placeholder="Name:" required></input>
                            <input type="text" id="email" className="form-input" placeholder="Email:" required></input>
                        </section>
                        <input type="text" id="subject" className="form-input" placeholder="Subject:" required></input>
                        <br></br>
                        <input type="text" id="message" className="form-input" placeholder="Message:" required></input>
                        <br></br>
                        <input type="submit" className="form-input" value="Submit" />
                    </form>
                </div>
                <div className="form-container col-4" style={{backgroundColor: "#C1A993"}}>
                    <h3><b>Contact Me!</b></h3>
                    <br></br>
                    <p><img style={{height: "20px", width: "20px"}} src="assets/icons/phone.png"/> (808) 462-1429</p>
                    <p><img style={{height: "20px", width: "20px"}} src="assets/icons/email.png"/> lminami@calpoly.edu</p>
                </div>
            </div>
        </div>
    </main>) 
}