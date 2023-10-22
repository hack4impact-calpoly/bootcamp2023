type Blog = {
    title: string;
    date: string;
    desc: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Everything is Going Great",
        date: "01-01-2002",
        desc: "New Year's Day could not be going better.",
        slug: "url"
    },

    {
        title: "My Life in Shambles",
        date: "01-02-2022",
        desc: "The tough start to a new year.",
        slug: "url",
    },

    {
        title: "Back to Doing Better",
        date: "-1-03-2022",
        desc: "False alarm on that last post there, all is well again.",
        slug: "url",
    }
];

blogs.forEach(item => {
    const element = document.createElement('div')
    const innerHTML = element.innerHTML = 'New blog piece'
    const addingBlog = document.getElementById('blog')!;
    addingBlog.appendChild(element)
    console.log(addingBlog)
})