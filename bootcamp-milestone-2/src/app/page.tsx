export default function Home() 
{
  return (
      <main>
            <h1 className="page-title">Welcome!</h1>
            <div className ="about">
                <div className ="about-image">
                  <img src = "Profile.jpeg" alt="Profile Picture" />
                </div>
                <div className ="about-text">
                    <p>Hi! My name is <strong>Sriya Adunur</strong> and I'm at 2nd year student
                    majoring in Computer Science at <strong>Cal Poly SLO</strong>. </p>
                    <p> Some of my hobbies include traveling, watching
                    movies (especially murder mysteries and thrillers),
                    and exploring new places to eat. A few countries I've traveled to include Italy, 
                    Spain, and Canada. Tokyo is one place that is currently on my bucket list.
                     </p>
                    <p> Feel free to explore my website!</p>
                </div>
            </div>
        </main>
  );
}
