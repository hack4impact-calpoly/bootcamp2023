// interface Blog {
//     title: string;    
//     date: string;
//     description: string;
//     slug: string;
//     [key: string]: any
// }
// const blogTypes = [
//     'Personal',
//     'Career',
//     'Exploration',
//     'Tech',
// ];
var blogs = [
    {
        title: "Personal",
        date: "11/2/2023",
        description: "Life & sports",
        slug: "blog-personal",
    },
    {
        title: "Career",
        date: "11/2/2023",
        description: "Ventures & projects",
        slug: "blog-career",
    },
    {
        title: "Exploration",
        date: "11/2/2023",
        description: "Nature & hiking",
        slug: "blog-exploration",
    },
    {
        title: "Tech",
        date: "11/2/2023",
        description: "Interests & cutting edge",
        slug: "blog-tech",
    },
];
// function createBlogElements() {
//     const container = document.querySelector('.blog-container');
//     if (container) {
//         blogs.forEach(blog => {
//             // Create a new <div> element for each blog
//             const blogElement = document.createElement('div');
//             blogElement.classList.add('blog-entry'); // Add a CSS class for styling
//             // Create HTML content for the blog entry
//             blogElement.innerHTML = `
//                 <h2>${blog.title}</h2>
//                 <p>Date: ${blog.date}</p>
//                 <p>${blog.description}</p>
//                 <a href="${blog.slug}">Read more</a>
//             `;
//             // Append the new blog element to the container
//             container.appendChild(blogElement);
//         });
//     } else {
//         console.error('Container not found.');
//     }
// }
// // Call the function to create and append blog elements
// createBlogElements();
function displayBlogPreview() {
    // Sort the blog previews by date
    blogs.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    // Get the blog list element from the HTML
    var blogList = document.getElementById("blog-div");
    // Create a preview for each blog post and append it to the blog list element
    blogs.forEach(function (_a) {
        var slug = _a.slug, title = _a.title, date = _a.date, description = _a.description;
        var link = document.createElement("a");
        link.href = "blog/".concat(slug, ".html");
        link.innerHTML = "Read More";
        var postPreview = document.createElement("div");
        postPreview.classList.add("post-preview");
        postPreview.innerHTML = "\n            <h2 class=\"post-title\">".concat(title, "</h2>\n            <h3 class=\"post-subtitle\">").concat(date, "</h3>\n            <p class=\"post-description\">").concat(description, "</p>\n        ");
        postPreview.appendChild(link);
        if (blogList) {
            blogList.appendChild(postPreview);
        }
    });
}
// Call the displayBlogPreview function to display the blog previews in the HTML
displayBlogPreview();
