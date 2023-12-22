import Image from "next/image";

export default function Ducks() {
    return(
        <div>
        <main>
            <h1>BEST DUCKS</h1>
            <h2>1. silly ducks</h2>
            <p>the best kind of duck is a silly duck</p>
            <Image src="/silly_duck.jpg" alt="silly duck" width={350} height={300}></Image>
            <p>10/26/2023</p>
  
        </main>
        </div>
    )
}
