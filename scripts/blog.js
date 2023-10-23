// var blogPosts = [
//     {
//         title: "Gardening",
//         date: "10-19-2023",
//         description: "Outside of coding I enjoy to spend some time gardening and growing food for my family.",
//         slug: "gardening-post"
//     } ,
//     {
//         title: "Hiking",
//         date: "7-12-2023",
//         description: "Something else outside of the realm of technology is hiking, and enjoying nature.",
//         slug: "hiking-post"
//     }
// ];

// function displayBlogPost() {
//     /*blogPosts.sort(function (a, b) {
//         return new Date(b.date).getTime() - new Date(a.date).getTime();
//     });*/
//     // might need to add <ul > element inside of blog-container
//     var listOfBlogPosts = document.getElementById("blog-posts");
//     blogPosts.forEach(function (_a) {
//         var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
//         var link = document.createElement("a");
//         link.href = "blog/" + {slug} + ".html";
//         link.innerHTML = "Read More";
//         var postPreview = document.createElement("div");
//         /*<!--postPreview.classList.add("post-preview");
//         postPreview.innerHTML = "\n<h2 class=\"post-title\">" 
//         + {title} + "</h2>\n + <h3 class=\"post-subtitle\">" 
//         + {date} + "</h3>\n + <p class=\"post-description\">"
//         + {description} + "</p>\n";-->*/
//      
//         postPreview.appendChild(link);
//         if (listOfBlogPosts) {
//             listOfBlogPosts.appendChild(postPreview);
//         }
//     });
// }
// displayBlogPosts();


var blogPosts = [
    {
        title: "Gardening",
        date: "10-19-2023",
        description: "Outside of coding I enjoy spending time gardening and growing food for my family.",
        slug: "gardening-post"
    },
    {
        title: "Hiking",
        date: "7-12-2023",
        description: "Something else outside of the realm of technology is hiking, and enjoying nature.",
        slug: "hiking-post"
    }
];

function displayBlogPosts() {
    blogPosts.sort(function (a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    var listOfBlogPosts = document.getElementById("blog-posts");
    blogPosts.forEach(function (post) {
        var title = post.title, date = post.date, description = post.description, slug = post.slug;
        
        var link = document.createElement("a");
        link.href =  slug + ".html";
        link.innerHTML = "Read More";

        var postPreview = document.createElement("div");
        postPreview.innerHTML = "\n<h2 class=\"post-title\">" 
        + title + "</h2>\n<h3 class=\"post-subtitle\">" 
        + date + "</h3>\n<p class=\"post-description\">" 
        + description + "</p>\n";
        postPreview.appendChild(link);
        
        if (listOfBlogPosts) {
            listOfBlogPosts.appendChild(postPreview);
        }
    });
}

displayBlogPosts();

