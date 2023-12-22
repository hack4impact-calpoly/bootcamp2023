export default function Home() {
    return (<main>
      <div className="container-fluid d-flex flex-column align-items-center">
        <div className="row justify-content-around align-items-center" style={{textAlign: "center", width: "85%", margin: "15px"}}>
            <div className="col" style={{margin: "17px"}}>
              <img src="../assets/blog/post1.jpg" className="d-block" style={{width: "100%"}}/>
            </div>
            <div className="col d-flex flex-column align-items-center">
              <h1>Red Bricks: Santa Lucia</h1>
              <p >The Red Bricks (also known as the South Mountain Residence Halls/Dorms) at Cal Poly were built in 1959; they are what you would expect from a steryotypical college dorm. They are located closest to the campus core. There are six different halls: Trinity, Santa Lucia, Muir, Seqouia, Fremont, and Tenaya.</p>
              <p>I like Santa Lucia. A lot of things happen in Santa Lucia; for example, fires in dryers and broken ceiling tiles.</p>
            </div>
          </div>
      </div>
    </main>) 
  }