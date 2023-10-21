type Post = {
    title: string;
    date: string;
    description: string;
    slug: string;
};
const Posts: Post[] = [
    {
        title: "My first blog post",
        date: "2023-10-10",
        description: "Starting milestone 1!",
        slug: "firstblog",
    },
];

function addBlogsDOM (blogPosts: Post[]){
    const container = document.getElementById("blog");
    blogPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    blogPosts.forEach(
        (post) => {
            const newPost = document.createElement('div');
            const title = document.createElement('h2');
            const date = document.createElement('h3');
            const description = document.createElement('p');
            const slug = document.createElement('a');

            title.innerHTML = post.title;
            newPost.appendChild(title);
            date.innerHTML = post.date
            newPost.appendChild(date);
            description.innerHTML = post.description;
            newPost.appendChild(description);
            slug.href = `blogs/${slug}.html`;
            slug.innerHTML = "Read More";
            newPost.appendChild(slug);

            newPost.className = "blog-entry";

            newPost.addEventListener("click", () => {
              window.location.href = "blogs/" + post.slug + ".html";
            });

            if(container){
                container.appendChild(newPost);
            }
        }
    )
}
addBlogsDOM(Posts);