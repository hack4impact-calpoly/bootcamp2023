type picture = {
  title: string;
  description: string;
};

const pictures: picture[] = [
  {
    title: "TSimg1",
    description: "Traditional outfit at a palace~",
  },
  {
    title: "TSimg2",
    description: "It was so pretty >.<",
  },
  {
    title: "TSimg3",
    description: "!!",
  },
  {
    title: "TSimg4",
    description: "POV: you try a bidet for the first time",
  },
];

function displayPics() {
  const picsList = document.getElementById("visuals");
  pictures.forEach(({ description, title }) => {
    const createPost = document.createElement("div");
    createPost.classList.add("create-img");
    createPost.innerHTML = `
          <img width="200px" height="250px" src="../blog/imgs/${title}.JPG">
          <p class="caption">${description}<p>
      `;
    if (picsList) {
      picsList.appendChild(createPost);
    }
  });
}

displayPics();
