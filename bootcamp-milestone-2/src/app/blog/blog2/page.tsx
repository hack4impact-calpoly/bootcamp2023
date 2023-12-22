export default function Home() {
  return (<main>
    <div className="container-fluid d-flex flex-column align-items-center">
      <div className="row justify-content-around align-items-center" style={{textAlign: "center", width: "85%", margin: "15px"}}>
          <div className="col" style={{margin: "17px"}}>
            <img src="../assets/blog/post2.jpg" className="d-block" style={{width: "100%"}}/>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <h1>Cal Poly's Hui 'O Hawai'i Club</h1>
            <p>I was born and raised in Honolulu, Hawaii. Coming to Cal Poly, which is around 2500 miles away from home, I wanted to still be connected to my roots, so I joined Hawaii Club at Cal Poly!</p>
            <p>So far, we have been to Avila Barn, spam musubi making, intramural sports, and so much more! We are currently in the process of revealing for big/little.</p>
          </div>
        </div>
    </div>
  </main>) 
}