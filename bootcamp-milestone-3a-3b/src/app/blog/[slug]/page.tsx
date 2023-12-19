import styles from "./page.module.css";
import BlogPost from "../../components/blogPost.tsx";
// import { error } from "console";
import { useRouter } from "next/router";

/// FIX THE ROUTING and then the java script then make it and

// type Props = {
//     params: { slug: string}
// }
// { params }: Props

type IParams = {
  params: { slug: string };
};


async function getBlog(slug : string) {
  try { // If any errors pop up, they will be caught
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`)
    if (!res.ok) {
      throw new Error("Failed to fetch blog.") // error if we didn't get the data
    }
    return res.json() // return the fetched data as JSON
  } catch (error) {
    console.log(error)
    return null
  } 
}

  // Fix the date so it is correctly being shown
  const parseDate = (date: string) => {
    let tLocation = date.indexOf("T")
    let newDate = date.slice(0, tLocation)
    let year = newDate.slice(2, newDate.indexOf("-"))
        newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
    let month = newDate.slice(0, newDate.indexOf("-"))
        newDate = newDate.slice(newDate.indexOf("-") + 1, newDate.length)
    let day = newDate.slice(0, newDate.length)
  
    const dateFormated = `${month}/${day}/${year}`
    return dateFormated
    // Getting
    // 2023-11-03
    // Desired
    // 11/03/23
  }




export default async function IndvidualBlog({ params: { slug } }: IParams) {
  const { blog } = await getBlog(slug); // get the blogs
  if (blog == null) {   // Handle the null case
    return(
      <h1>Blog Post</h1>
      // Don't give any blogs
    )
  }

  blog.date = parseDate(blog.date);
  return ( 
      <>
      <h1>Blog Post</h1>
      <BlogPost {...blog} />
      </>
  )
}


// export default function IndvidualBlog({ params: { slug } }: IParams) {
//   let found = false;
//   let blogNum = 0;
//   for (let index = 0; index < blogs.length; index++) {
//     if (slug === blogs[index].slug) {
//       found = true;
//       blogNum = index;
//     }
//   }

//   if (found) {
//     return (
//       <>
//         <h1>Blog Post</h1>
//         <BlogPost {...blogs[blogNum]} />
//       </>
//     );
//   } else {
//     return (
//       <div className={styles.error}>
//         <h1> Error: Blog &quot;{slug}&quot; Not Found </h1>
//       </div>
//     );
//   }
// }






// const router = useRouter()
// const slug = router.query.slug // coresdponing to the name of the file
// let found = false
// let blogNum = 0

// We are going to go through the blogs and see if the slug put in matches
// if there is a matching slug, we will break from the loop and then return the blog page
// Also makes room for a case where there are 2 of the same slugs (but this is a problem outside the scope of this project)
// else say that there is no blog page (through an error 404)

//         const router = useRouter()
//         const { slug } = router.query;
//         const slugs = blogs.map(blog => blog.slug)// The blog data of just slugs from blogs
//         let found = false;

//         for (let index = 0; index < slugs.length; index++) {
//             if (slugs[index] === {slug}) {
//                 found = true;
//             }
//         }

// try {
//     if (found){
//         return(
//             <>
//             <h1>Blog Catalog</h1>
//             <div>
//             {blogs.map(blog =>
//             <BlogPost
//                 {...blog}
//                 key={blog.slug}
//             />
//             )}
//             </div>
//             </>
//         )
//     } else {
//         throw new Error('404');
//   }
// } catch (error) {
//     console.log("An Error Occured: " + error)
//     return (
//         <h1>{"Blog Not Found: Error " + error}</h1>
//     )
// }

// }
