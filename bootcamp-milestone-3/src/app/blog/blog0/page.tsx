import Link from 'next/link';

export default function Home() {
    return (<main>
      <div className="container-fluid d-flex flex-column align-items-center">
        <div className="row justify-content-around align-items-center" style={{textAlign: "center", width: "85%", margin: "15px"}}>
            <div className="col" style={{margin: "17px"}}>
              <img src="../assets/blog/post0.jpg" className="d-block" style={{width: "100%"}}/>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <h1>Quarter Plus Shenanigans</h1>
              <p >Quarter Plus is an extended learning opporotunity offered by Cal Poly during the summer of your first year. We were able to do a lot of things before college began: it was really fun.</p>
              <p>We got up to a lot of different things: lots of cooking in the yakʔitʸutʸu kitchens, hiking the P and architecture graveyard, lots of target runs, activities offered by the Q+ learning assistants, and celebrating my birthday.</p>
              <div className="d-flex align-items-center justify-content-center">
                <Link className="learn_more_btn qplus-btn" type="button" target="_blank" href="https://quarterplus.calpoly.edu/">Learn More About Quarter Plus!</Link>
                <Link className="learn_more_btn qplus-btn" type="button" target="_blank" href="https://www.instagram.com/calpolyquarterplus/">Check Out Quarter+ on Instagram <img style={{height: "20px", width: "20px"}} src="../assets/icons/insta-black.png"/></Link>
              </div>
            </div>
          </div>
      </div>
    </main>) 
  }