type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogPosts: Blog[] = [
    {
        title: "Chicken Soup",
        date: "9-25-2023",
        description: "chicken soup",
        slug: "chicken_soup"
    },
    {
        title: "Curry Egg Noodles",
        date: "10-21-2023",
        description: "curry egg noodles",
        slug: "curry_egg_noodles"
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