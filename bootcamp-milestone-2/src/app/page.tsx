export default function Home() {
  return (<main>
    <div className="container-fluid" style={{textAlign: "center"}}>
      <div className="row justify-content-around align-items-center">
        
        <div className="col-5">
          <img src="assets/home.jpg" className="d-block" style={{width: "100%"}}></img>
        </div>

        <div className="col-4 d-flex flex-column align-items-center">
          <h1><b>About Me</b></h1>
          <p >Hi! My name is Lindsay Minami! I was born and raised from Honolulu, Hawaii and attended Punahou School. I am a first year computer science major, hoping to minor in Japanese.</p>
          <p>My hobbies/things I am interested include spending time with my friends, surrounding myself with people, listening to music, and photography.</p>
        </div>
      </div>
    </div>
  </main>) 
}