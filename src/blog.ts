type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogPosts: Blog[] = [
    {
        title: "Test Post 1",
        date: "10-22-2023",
        description: "First blog post!",
        slug: "test_post_1"
    },
    {
        title: "Test Post 1",
        date: "10-22-2023",
        description: "Second blog post!",
        slug: "test_post_2"
    },
];

function blogPreview() {

    const blogList = document.getElementById("blog-list");

    blogPosts.forEach(({ title, date, description, slug }) => {
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

blogPreview();