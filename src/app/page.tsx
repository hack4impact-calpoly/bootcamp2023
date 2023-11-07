import React from 'react'

// You can name the function within page.tsx anything you want.
export default function Home() {
  return ( <div>
		<title>Sophia's Personal Website</title>
        <main>
            <br></br>
            <h1 className='title'>Welcome!</h1>
            <br></br>
            <div className="about">
                <div className="about-image">
                    <img src="aboutme.jpeg" alt="an about me image"></img>
                </div>
                <br></br>
                <div className="about-text">
                    <p>Hello, my name is <b>Sophia Chang!</b> I am currently <i>18 years old</i> studying <strong>computer science</strong>.</p>
                    <p>In my free time, I often make <em>digital art</em> and <em>animate</em>. I enjoy <i>video editing</i> as well.</p>
                </div>
            </div>
        </main>
</div>) 
}