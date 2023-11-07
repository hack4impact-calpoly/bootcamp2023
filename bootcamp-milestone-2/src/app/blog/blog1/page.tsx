import Image from "next/image"
export default function BlogPage1() {
    return (
        <>
            <main>
                <h1 className="page-title">Cal Poly Classes</h1>

                <div className="blogContent">
                    <div className="blogPostDate">
                        <p>10-20-2023</p>
                    </div>
                    <div className="blogDescription">
                        <p>Discussions on Cal Poly CS Classes</p>
                    </div>
                    <div>
                        <Image src="/climbing.jpg" alt="Climbing Image" height="500" width="500" />
                    </div>
                    <p>California Polytechnic State University, San Luis Obispo (California Polytechnic State University,[8] Cal Poly,[Note 1][9] or Cal Poly San Luis Obispo[8]) is a public university in San Luis Obispo County, adjacent to the city of San Luis Obispo. It is the oldest of three polytechnics in the California State University system. </p>
                </div>

            </main>
        </>
    )
}