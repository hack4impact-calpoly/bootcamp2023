export default function Home() {
    return (
        <main>
            <p>{`${process.env.TEST}`}</p>
            <h1>Hello World!</h1>
            <img src="chess.png" />
            <div className="about">
                <div className="about-image"></div>
                <div className="about-text">
                    <p>
                        Hello my name is Aaron Ahmadyar. I am a fourth year
                        Computer Engineering Student at Cal Poly SLO with a
                        passion for Software Engineering.
                    </p>
                </div>
            </div>
        </main>
    );
}
