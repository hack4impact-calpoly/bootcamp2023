type pic = {
  title: string;
  description: string;
};

const pics: pic[] = [
  {
    title: "JKimg1",
    description: "Nice weather in Seoul~",
  },
  {
    title: "JKimg2",
    description: "Cafe Hopping :P",
  },
  {
    title: "JKimg3",
    description: "Went to a palace ^^",
  },
  {
    title: "JKimg4",
    description: "Came with just my carry-on filled...",
  },
];

function displayPics() {
  const picsList = document.getElementById("visuals");
  pics.forEach(({ description, title }) => {
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
