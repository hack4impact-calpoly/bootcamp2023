var blogs = [
    {
        title: "I Love Fridays",
        date: "October 20, 2023",
        description: "It's Friday! My favorite day of the weekend. Weather today was super nice, I love hot and sunny days. I had two classes today and went to an awesome house show in Pismo! Can't wait for next Friday!",
        slug: "i_love_fridays"
    },
    {
        title: "Weekend Recap",
        date: "October 22, 2023",
        description: "This weekend was pretty chill. On Saturday, I started my day with a refreshing hike up Bishops. For linner (lunch and dinner) I went out to Papa's Thai in downtown with friends for some delicious dumplings and fried bananas. I then made my way over to my friend's apartment for his birthday party-- super fun. Today (Sunday), I hiked the serenity swing trail, and lw almost died. I then spent the rest of the day catching up on work and mentally preparing for the horrendous week I have ahead of me :/",
        slug: "weekend_recap"
    },
];
function displayBlogs() {
    var listOfBlogs = document.getElementById("Blog-Postings"); // getting blog list div element from HTML
    blogs.forEach(function (_a) {
        var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
        // creating blog entry with its content
        var blogEntry = document.createElement("div");
        blogEntry.classList.add("blog-entry");
        blogEntry.innerHTML =
            "<h2 class=\"entry-title\">".concat(title, "</h2>\n        <h3 class=\"entry-date\">").concat(date, "</h2>\n        <p class=\"entry-description\">").concat(description, "</p>");
        // creating link: slug
        var link = document.createElement("a");
        link.href = "blog_content/".concat(slug, ".html");
        link.innerHTML = "Read More";
        // appending blog entries to blog postings element in HTML
        blogEntry.appendChild(link);
        if (listOfBlogs) {
            listOfBlogs.appendChild(blogEntry);
        }
    });
}
displayBlogs(); // calling function to display the blog entries in HTML
