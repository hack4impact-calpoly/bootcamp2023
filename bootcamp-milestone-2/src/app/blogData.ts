
//create object BLOG to hold data needed for each blog post
type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

//list of Blog objects that will be inserted to HTML page
const blogs: Blog[] = [
    {
        title: "Yosemite Hike",
        date: "10-18-2023",
        description: "My most recent hike at Yosemite!",
        slug: "yosemite-hike"
    },
    {
        title: "Avila Hike",
        date: "10-19-2023",
        description: "A hike I did recently by Avila beach!",
        slug: "avila-hike"
    }
]

export default blogs