import Image from "next/image";

export default function Ducks() {
    return(
        <div>
        <main>
            <h1>BEST CHEESE</h1>
            <h2>1. Old Amsterdam Gouda</h2>
            <p>an explosion of flavor</p>
            <Image src="/old-amsterdam.jpg" alt="sold gouda cheese" width={350} height={300}></Image>
            <p>10/26/2023</p>
  
        </main>
        </div>
    )
}
