// dummy data for blog preview
var blogPosts = [
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
    blogPosts.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    // Get the blog list element from the HTML
    var blogList = document.getElementById("blog-list");
    // Create a preview for each blog post and append it to the blog list element
    blogPosts.forEach(function (_a) {
        var slug = _a.slug, title = _a.title, date = _a.date, description = _a.description;
        var link = document.createElement("a");
        link.href = "".concat(slug, ".html");
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
