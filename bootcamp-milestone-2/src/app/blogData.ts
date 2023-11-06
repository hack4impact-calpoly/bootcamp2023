export interface Blog {
	title: string;
    date: string;
    description: string;
    slug: string;
    image: string;
}

const blogs: Blog[] = [
    {title: "Meet my dogs!",
     date: "October 19, 2023",
     description: "I have two dogs, Zoe and Freddy, they are very cute!",
     slug: "../meet-my-dogs",
     image: "/dogspic.png"},

     {title: "Favorite Places",
      date: "October 15, 2023",
      description: "Some of my favorite places are my family's condo in Edwards, Colorado, my car, my bed at home, and the mountains in the fall/winter",
      slug: "../favorite-places",
      image: "/mountainspic.png"
    }
]

export default blogs; // This will allow us to access this data anywhere!