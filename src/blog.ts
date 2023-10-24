type BlogPreview = {
    slug: string; // the slug is the name of the HTML file for the blog post
    title: string; // the title of the blog post
    date: string; // the date the blog post was published
    description: string; // a short description of the blog post
};

// dummy data for blog preview
const blogPosts: BlogPreview[] = [
    {
        slug: "test_file",
        title: "Generative Artwork",
        date: "2020-02-03",
        description: "Explore the mesmerizing fusion of art and technology as we delve into the world of generative AI and deep learning algorithms.",
    },
    {
        slug: "test_file_2",
        title: "Everything You Need to Know About Generative A.I.",
        date: "2021-01-02",
        description: "Discover the magic of Generative AI as we unravel its ability to autonomously create art, music, and more, pushing the boundaries of what artificial intelligence can achieve.",
    },
];

/**
 * Display the blog previews in the blog.html page by manipulating the DOM.
 * This function sorts the blog previews by date, creates a preview for each blog post,
 * and appends the previews to the blog list element in the HTML.
 */
function displayBlogPreview() {
    // Sort the blog previews by date
    blogPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    // Get the blog list element from the HTML
    const blogList = document.getElementById("blog-list");

    // Create a preview for each blog post and append it to the blog list element
    blogPosts.forEach(({ slug, title, date, description }) => {
        const link = document.createElement("a");
        link.href = `${slug}.html`;
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

// Call the displayBlogPreview function to display the blog previews in the HTML
displayBlogPreview();