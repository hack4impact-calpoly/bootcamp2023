export interface AboutInfo {
    title: string;
    description: string;
    image: string;
}

let aboutInfos: AboutInfo[] = [
    {
        title: "About Me",
        description: "Hey All! I'm a third year computer science major at Cal Poly! I enjoy playing video games, playing volleyball and crocheting. Right now I'm working on a massive green worm named Phil. And of course I love plants!",
        image: "/IMG_9284.JPG"
    },
    {
        title: "Crochet",
        description: "I started crocheting in 2021 because my girlfriend got me into it. Since then I've made a few things like this whale and I have a lot more unfinished. Aside from the green worm, I'm excited to start a burger snail!",
        image: "/whale.jpg"
    },
    {
        title: "Plants",
        description: "I got my first plant from the Poly Plant shop in 2022 and I haven't stopped getting them since. I still have those original ones growing and I'll soon have to repot them. Let me know if you have any plant recommendations!",
        image: "/plant.jpg"
    },
];

export default aboutInfos;