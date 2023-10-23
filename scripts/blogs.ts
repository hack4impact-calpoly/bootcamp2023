type Blog = { // blog type
    title: string;
    date: string;
    description : string;
    slug : string;
};

const blogs : Blog[] = [ // list of blog entries
    {
        title : "I Love Fridays",
        date : "October 20, 2023",
        description : "It's Friday! My favorite day of the weekend. Weather today was super nice, I love hot and sunny days. I had two classes today and went to an awesome house show in Pismo! Can't wait for next Friday!",
        slug : "i_love_fridays"
    },

    {
        title : "Weekend Recap",
        date : "October 22, 2023",
        description : "This weekend was pretty chill. On Saturday, I started my day with a refreshing hike up Bishops. For linner (lunch and dinner) I went out to Papa's Thai in downtown with friends for some delicious dumplings and fried bananas. I then made my way over to my friend's apartment for his birthday party-- super fun. Today (Sunday), I hiked the serenity swing trail, and lw almost died. I then spent the rest of the day catching up on work and mentally preparing for the horrendous week I have ahead of me :/",
        slug : "weekend_recap"
    },
];

function displayBlogs() { // displays blog entries to the blog postings element in HTML

    const listOfBlogs = document.getElementById("Blog-Postings"); // getting blog list div element from HTML

    blogs.forEach(({title, date, description, slug}) => {

        // creating blog entry with its content
        const blogEntry = document.createElement("div");
        blogEntry.classList.add("blog-entry");
        blogEntry.innerHTML = 
        `<h2 class="entry-title">${title}</h2>
        <h3 class="entry-date">${date}</h2>
        <p class="entry-description">${description}</p>`;

        // creating link: slug
        const link = document.createElement("a");
        link.href = `blog/${slug}.html`;
        link.innerHTML = "Read More";

        // appending blog entries to blog postings element in HTML
        blogEntry.appendChild(link);
        if (listOfBlogs) {
            listOfBlogs.appendChild(blogEntry);
        }
    });
}

displayBlogs(); // calling function to display the blog entries in HTML


