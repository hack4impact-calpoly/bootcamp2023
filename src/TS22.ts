// type pic = {
//     title: string;
//     description: string;
//   };
  
//   const pics: pic[] = [
//     {
//       title: "",
//       description: "",
//     },
//     {
//       title: "",
//       description: "",
//     },
//     {
//       title: "",
//       description: "",
//     },
//     {
//       title: "",
//       description: "",
//     },
//   ];
  
//   function displayPics() {
//     const picsList = document.getElementById("visuals");
//     pics.forEach(({ description, title }) => {
//       const image = document.createElement("img");
//       image.src = `blog/imgs/${title}.JPG`;
//       const createCaption = document.createElement("div");
//       createCaption.classList.add("create-caption");
//       createCaption.innerHTML = `
//           <p class"caption">${description}<p>
//       `;
//       createCaption.appendChild(image);
//       if (picsList) {
//         picsList.appendChild(createCaption);
//       }
//     });
//   }
  
//   displayPics();
  