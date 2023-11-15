import Image from "next/image";

export default function Cheese() {
    return(
        <div>
            <main>
            <h1>BEST CHEESE</h1>
            <h2>1. old amsterdam gouda</h2>
            <Image src="/old-amsterdam.jpg" alt="cheese" width="200" height="200"></Image>
            <p>An explosion of flavor</p>
            <p>10/26/2023</p>
        </main>
        </div>
    )
}