document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the blog container
    const blogContainer = document.querySelector(".container");


    var blogs = [
        {
            title: "A Day in My Life at UCSB",
            date: "Oct 21 2023",
            description: "Great Scenic Places at UCSB for Photography...",
            slug: "first",
            category: "Life",
            author: "HanYu Wu",
            authorImage: "./HanYu Wu.jpg",
            headerImage: "./UCSB_Selfie.jpg"
        },
        {
            title: "Cooking with Roommate",
            date: "Sep 20 2023",
            description: "Delicious Steak Recipe...",
            slug: "second",
            category: "Food",
            author: "HanYu Wu",
            authorImage: "./HanYu Wu.jpg",
            headerImage: "./steak.jpg"
        }
    ];

blogs.forEach((blog) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Setting the card content using inner html
    card.innerHTML = `
        <div class="card__header">
            <img src="${blog.headerImage}" alt="card__image" class="card__image" width="600">
        </div>
        <div class="card__body">
            <span class="tag tag-blue">${blog.category}</span>
            <h4>${blog.title}</h4>
            <p>${blog.description}</p>
        </div>
        <div class="card__footer">
            <div class="user">
                <img src="${blog.authorImage}" alt="user__image" class="user__image">
                <div class="user__info">
                    <h5>${blog.author}</h5>
                    <small>${blog.date}</small>
                </div>
            </div>
        </div>
    `;

    card.addEventListener("click", function(){
        window.location.href = `./src/${blog.slug}-blog.html`;
    });

    blogContainer.appendChild(card);
  });
});