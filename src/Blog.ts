// Define the Blog type
type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

// Sample array of blogs
const blogs: Blog[] = [
    {
        title: "Midterm Season",
        date: "10-23-2023",
        description: "Today I had my M225 Midterm, and it was very interesting",
        slug: "blog_post_1",
    },
    {
        title: "The Story of Boo",
        date: "10-20-2023",
        description: "My roommate got a cat, and I developed a sinus infection",
        slug: "blog_post_2",
    },
];

// Function to add blogs to the container
function addBlogs(blogList: Blog[]) {
    let blogContainer = document.querySelector(".blogContain");
    blogList.forEach(blog => {
        let newBlogDiv = document.createElement("div");
        newBlogDiv.innerHTML = `
            <h1>${blog.title}</h1> 
            <h3>${blog.date}</h3>
            <p>${blog.description}</p>
            <a href="${blog.slug}">Read More<br><br><br></a>`;
        blogContainer?.appendChild(newBlogDiv);
    });
}

addBlogs(blogs);



