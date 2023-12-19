import styles from "./page.module.css";
import BlogPost from "../../components/blogPost.tsx";

// My old way of getting params for personal notes
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