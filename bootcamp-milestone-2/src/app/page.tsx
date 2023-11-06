import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="page-title">About Me</h1>
        <div className="about">
          <div className="about-image"></div>
          <Image
            src="/CalPolySLOImage.jpg"
            alt="CalPolySLOImage"
            width={200}
            height={200}
          />
          <div className="about-text">
            <p className="text-black">Hello! My name is <strong>Brandon Wong</strong> and I am a second year
              <strong>Computer Science
                major</strong> at <em>Cal Poly SLO</em>
            </p>
            <p className="text-black">In my free time, I like playing tennis, going on hikes, and cooking.</p>
            <section></section>
          </div>
        </div>
      </main>
    </div>
  )
}
