import React from "react";
import "../../../styles/styles.css"

export default function Resume() {
  return (
    <div>
      <main>
        <h1>Resume<span className="period">.</span></h1>
        <h2>Education</h2>
        <div className="entry">
          <h3>California Polytechnic University San Luis Obispo</h3>
          <p className="entry">Expected June 2025 <br/> GPA: 3.92 (President's List, 3x Dean's List)</p>

          <br/>
          <h3>American High School</h3>
          <p className="entry">2019-2022 <br/> Unweighted GPA: 3.93 | Weighted GPA: 4.41</p>
        </div>

        <br/>
        <h2>Technical Skills</h2>
        <div className="entry">
          <h3>Programming Languages: </h3>
          <p className="entry-center">Python | Java | C/C++ | Assembly | C# | Dart | JavaScript | SQL</p>
          <h3>Frameworks & Technologies</h3>
          <p className="entry-center">Streamlit | .NET | ReactJS | FLutter | K8s | Bash | Docker | Jenkins | CAD</p>
        </div>

        <br/>
        <h2>Experience</h2>
        <div className="entry">
          <h3>Aisera</h3>
          <p className="entry">Customer Engineering Intern (June 2023 - Sep 2023)</p>
          
          <br/>
          <h3>Standard Industries</h3>
          <p className="entry">Tech Engineering Intern (Jan 2022 - Mar 2023)</p>

          <br/>
          <h3>Made and Modern</h3>
          <p className="entry">CAD Intern (Jul 2021 - Aug 2021)</p>
          
          <br/>
          <br/>
          <a href='Sahith-Karra-Resume.pdf' className="downloadButton" download>Download</a>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};
  
