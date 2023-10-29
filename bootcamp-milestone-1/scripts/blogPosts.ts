type blogPostType = {
	title: string;
	date: string;
	message: string;
	slug: string;
};

const generateSlug = (title: string): string => {
	return title.toLowerCase().replace(/\s+/g, '-');
}

const blogPostsObj: blogPostType[] = [
	{
        title: "First Blog Post Wahoo",
        date: "04-05-2002",
        message: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house!",
        slug: generateSlug("First Blog Post Wahoo")
    },
    {
        title: "Second Blog Post (This One Stinks)",
        date: "06-10-2014",
        message: "beep boop bop boop zezapp whip hop bink bop ring ting razoo wahoh bip blop zeep zop diddly fop",
        slug: generateSlug("Second Blog Post (This One Stinks)")
    },
	{
        title: "Third Blog Post",
        date: "03-13-2015",
        message: "Do you, or do you not, know the muffin man? (the muffin man?) THE MUFFIN MAN! (the muffin man?) THE MUFFINNNNNN MANNNNNN!!! \<br>\<br>\<br> ps I hope you didn't read that last post, it was awful. The first one was fuego tho.",
        slug: generateSlug("Third Blog Post")
    },
];

function addPostToDOM(blogPostObj: blogPostType, clickable: boolean) {

    const blogPostsContainer = document.getElementById("blog-posts");

    const blogPost = document.createElement("div");
    if(clickable) { blogPost.classList.add("blog-post"); }
    else { blogPost.classList.add("blog-post-no-click"); }
    

    if(clickable) {
        blogPost.addEventListener("click", function() {
            window.location.href = "./blog-pages/" + blogPostObj.slug + ".html";
        });
    }

    const blogPostTitleDate = document.createElement("div");
    blogPostTitleDate.classList.add("blog-post-title-date");

    const blogPostTitle = document.createElement("h2");
    blogPostTitle.classList.add("blog-post-title");
    blogPostTitle.innerHTML = blogPostObj.title;

    const blogPostDate = document.createElement("p");
    blogPostDate.classList.add("blog-post-date");
    blogPostDate.innerHTML = blogPostObj.date;

    const blogPostMessage = document.createElement("p");
    blogPostMessage.classList.add("blog-post-message");
    blogPostMessage.innerHTML = blogPostObj.message;

    blogPostTitleDate.appendChild(blogPostTitle);
    blogPostTitleDate.appendChild(blogPostDate);

    blogPost.appendChild(blogPostTitleDate);
    blogPost.appendChild(blogPostMessage);

    blogPostsContainer?.appendChild(blogPost);
}

function addSinglePostToDOM(index: number) {
    addPostToDOM(blogPostsObj[index], false);
}

function addTildaToDOM() {
    const blogPostsContainer = document.getElementById("blog-posts");

    const blogPostTilda = document.createElement("h1");
    blogPostTilda.classList.add("blog-post-tilda");
    blogPostTilda.innerHTML = "~";

    blogPostsContainer?.appendChild(blogPostTilda);
}

function createBlogElements() {
    for(let i = 0; i < blogPostsObj.length; i ++) {
        addPostToDOM(blogPostsObj[i], true);
        if(i != blogPostsObj.length - 1) {
            addTildaToDOM();
        }
    }
}

