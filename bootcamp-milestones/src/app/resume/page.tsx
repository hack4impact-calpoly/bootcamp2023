// You can name the function within page.tsx anything you want.
export default function Resume() {
    return (
        <>
            <div className="container">
                <h1 id="resume">resume</h1>
                <h2 className="subheading">~click <a href="https://docs.google.com/document/d/1UEfitPCU642rZ1atnyGYLpvuJjxP6e-4kpYRqklVIbY/edit?usp=sharing">here</a> for full resume!~</h2>
                <br />
                
                <div className="item">
                    <h2 className="item_title">
                        <span><i className="fa fa-graduation-cap"></i></span>
                        Education
                    </h2>
                    <p className="item_description">
                        B.S. Software Engineering @ Cal Poly San Luis Obispo
                    </p>
                </div>

                <div className="item">
                    <h2 className="item_title">
                        <span><i className="fa fa-book"></i></span>
                        Relevant Coursework
                    </h2>
                    <p className="item_description">
                        Data Structures | AP Computer Science
                    </p>
                </div>

                <div className="item">
                    <h2 className="item_title">
                        <span><i className="fa fa-wrench"></i></span>
                        Skills
                    </h2>
                    <p className="item_description">
                        Python | Java | Web Dev | iOS App Dev | Computer Vision
                    </p>
                </div>

                <div className="item">
                    <h2 className="item_title">
                        <span><i className="fas fa-desktop"></i></span>
                        Experience
                    </h2>
                    <p className="item_description">
                    University of Chicago Data Science Institute: Supported the Schmidt Ocean Institute, a nonprofit conducting
                    global marine research by implementing a deep learning pipeline
                    using Python that detects and labels marine organisms in video
                    samples
                    </p>
                    <p className="item_description">
                    Girls Who Code: Co-President since 2021 at Lowell HS's Girls Who Code club where I
                    taught Python and web development
                    samples
                    </p>
                    <p className="item_description">
                    New York Academy of Sciences: Competed in 3 global collaborative healthcare innovation challenges one of which
                    I prototyped a Chrome extension with HTML and JavaScript intended
                    to screen for Alzheimer’s
                    samples
                    </p>
                </div>
            </div>
        </>
    ) 
  }