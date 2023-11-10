import Image from 'next/image';

export default function Post() {
    return (
<main>
<h1 className="page-title">Chicken Soup</h1>
    <div className="blog-description">
        <br></br> The rotisserie chicken strikes back!
        <br></br> I was craving curry noodles the other day because my mom makes it at home. So naturally, I had to try making it myself.
        <br></br> This meal was almost a flop, but being the amazing chef I am, I saved it from flopping.
        <br></br> The issue was that I didn't have any coconut milk to add to the curry paste, so the curry wasn't soupy how I wanted it to be.
        <br></br> I ended up making some chicken soup with chicken boullion I had in the fridge and just added it on top of the already assembled meal.
        <br></br> I stir fried bok choy, celery, and shallot together with some asian seasonings and added it on top, along with some shredded rotisserie chicken from Costco (a new one ofc).
        <br></br> Boyfriend rating: 9/10 :(
        <br></br> Critiques: "Because there could have been more meat on there uhhhh let me try to remember bigger portion for a bigger guy"
        <br></br> Stay tuned for more meals!
        <br></br>
        <br></br>
    </div>
    <div className="blog-picture">
        <Image src={'/curry_egg_noodle.jpg'} width={300} height={400} alt='image of food'></Image>
    </div>
</main>
    )
}