import { StaticImageData } from "next/image";
import bagelspic from "@/app/images/bagels.jpeg"
import uniqueinterviewpic from "@/app/images/uniqueinterviewskills.webp"

export interface Blog {
    title : string;
    date: string;
    description: string;
	image: StaticImageData;
    slug: string;
};

const blogs: Blog[] = [
	{
		title: "Unique interview skills",
		date: "10-22-2023",
		description: "Skills that would be really cool to show off in a a job interview.",
		image: uniqueinterviewpic,
        slug: "blog2.html",
	},
	{
		title: "Bagels",
		date: "10-21-2023",
		description: "Ranking bagel shops best to worst.",
		image: bagelspic,
        slug: "blog1.html",
	},
];

export default blogs;