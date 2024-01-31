type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
}

const blogs: Blog[] = [
    {title: "Meet my dogs!",
     date: "October 19, 2023",
     description: "I have two dogs, Zoe and Freddy, they are very cute!",
     slug: "meet-my-dogs"},

     {title: "Favorite Places",
      date: "October 15, 2023",
      description: "Some of my favorite places are my family's condo in Edwards, Colorado, my car, my bed at home, and the mountains in the fall/winter",
      slug: "favorite-places"}
]

function createBlogs (blogData: Blog[]) {
        //find div
        const parentEl= document.getElementById("blogContainer");
       
        //make sure div exists
        if (!parentEl){
            return ;
        }

        blogData.forEach((blog) => {
            const childEl = document.createElement("div");
            childEl.innerHTML = (`<h3> ${blog.title} </h3>  <div>${blog.date}</div> <p>${blog.description}</p> <a href="blog/${blog.slug}.html">Read More </a>` );
            parentEl.appendChild(childEl);
        });
} 

createBlogs(blogs);