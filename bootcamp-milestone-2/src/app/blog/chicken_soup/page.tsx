import Image from 'next/image';

export default function Post() {
    return (
        <main>
        <h1 className="page-title">Chicken Soup</h1>
            <div className="blog-description">
                <br></br> I recently bought a rotisserie chicken from Costco and made soup with the bones. I added the shredded chicken, bok choy, and rice.
                <br></br> This was a relatively easy meal to make. It was a bit challenging to get the flavor of the soup right, but it turned out great!
                <br></br> Stay tuned for more meals!
                <br></br>
                <br></br>
            </div>
            <div className="blog-picture">
                <Image src={'/blog_image.jpg'} width={300} height={400} alt='image of food'></Image>
            </div>
    </main>
    )
}