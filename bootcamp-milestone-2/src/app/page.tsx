import blogs from '@/app/blogData';
import BlogPreview from '@/components/blogPreview';

// You can name the function within page.tsx anything you want.
export default function Home() {
  return (
	<>
		<div className="bordered_container">
			<div>
			<h1>Sophia Peckner</h1>
			<p>
				I'm a first year software engineering major at Cal Poly SLO. In my
				free time you may find me reading, Ripstiking, or swimming.
			</p>

			<div>
				<p id="contact_me">Contact me!</p>
				<a href="https://www.instagram.com/sophiapeckner/"
				><i className="fab fa-instagram fa-xl"></i
				></a>
				<a href="https://www.linkedin.com/in/sophia-peckner-2a613a1b0"
				><i className="fab fa-linkedin fa-xl"></i
				></a>
			</div>
			</div>

			<div>
			<picture>
				<source
				id="profile_pic"
				src="images/profile_rect.png"
				media="(max-width: 400px)"
				/>
				<source
				id="profile_pic"
				src="images/profile_circle.png"
				media="(max-width: 1200px)"
				/>
				<source
				id="profile_pic"
				src="images/profile_large_screens.png"
				media="(max-width: 1500)"
				/>
				<source
				id="profile_pic"
				src="images/profile_large_screens.png"
				/>
				<img
				id="profile_pic"
				src="images/profile_large_screens.png"
				alt="Sophia Peckner profile picture"
				/>
			</picture>
			</div>
		</div>

		{blogs.map(blog => 
			<BlogPreview {...blog} />
		)}
	  </>
	) 
}