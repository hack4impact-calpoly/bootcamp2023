type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

const posts: Blog[] = [
    {
        title: "Some of my Favorite Artists",
        date: "October 21, 2023",
        description: "The Foals, Michael Jackson, Yung Pinch, Chance the Rapper are some of my favorite music artists.",
        slug: "blog-artists.html",
    },
    {
        title: "The Classes I am Taking",
        date: "October 21, 2023",
        description: "I am taking CSC 307, CSC 349, Calc IV, and Bio/BMED 213",
        slug: "blog-classes.html",
    },
];

function createPost(post: Blog){
    const shell = document.createElement('div');
    shell.classList.add("shell");
    
    const title = document.createElement('p');
    title.innerHTML = post.title;
    title.classList.add("blog-class");
    const date = document.createElement('p');
    date.innerHTML = post.date;
    date.classList.add("blog-class");
    const description = document.createElement('p');
    description.innerHTML = post.description;
    description.classList.add("blog-class");
    const slug = document.createElement('a');
    const textNode = document.createTextNode("This is the link");
    slug.title = "Link to Post";
    slug.href = post.slug;
    slug.appendChild(textNode);
    slug.classList.add("blog-class");
    shell.appendChild(title);
    shell.appendChild(date);
    shell.appendChild(description);
    shell.appendChild(slug);

    const blog = document.getElementById('blog');
    blog?.appendChild(shell);
}


posts.forEach((element) => createPost(element));