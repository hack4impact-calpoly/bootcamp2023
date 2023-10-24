type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "School",
        date: "9-19-2023",
        description: "Started 4th year of school",
        slug: "hello.come"
    },
    {
        title: "Thanksgiving",
        date: "11-19-2023",
        description: "Thanksgiving with Family",
        slug: "Martinez.com"
    }
];

function displayBlogPreview() {
    // Sort the blog previews by date
    blogs.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // Get the blog list element from the HTML
    const blogList = document.getElementById("blog-div");

    // Create a preview for each blog post and append it to the blog list element
    blogs.forEach(({ slug, title, date, description }) => {
        const link = document.createElement("a");
        link.href = `blog/${slug}.html`;
        link.innerHTML = "Read More";
        const postPreview = document.createElement("div");
        postPreview.classList.add("post-preview");
        postPreview.innerHTML = `
            <h2 class="post-title">${title}</h2>
            <h3 class="post-subtitle">${date}</h3>
            <p class="post-description">${description}</p>
        `;
        postPreview.appendChild(link);
        if (blogList) {
            blogList.appendChild(postPreview);
        }
    });
}


displayBlogPreview();