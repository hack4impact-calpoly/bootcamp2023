import styles from "./page.module.css"
import { blogSchema, IBlog } from '../../database/blogSchema';
import BlogPreview from '../components/blogPreview';
import connectDB from "../../helpers/db";


async function getBlogs() {
  try { // If any errors pop up, they will be caught
    
    const res = await fetch(process.env.MY_API + "/api/blogs", {
      cache: 'no-store' // so if we add new blogs, they will show up when the page is refreshed
    })
    
    if (!res.ok) {
      throw new Error("Failed to fetch blogs.") // error if we didn't get the data
    }

    return res.json() // return the fetched data as JSON

  } catch (error) {
    console.log(error)
    return null
  } 
}
// for data base


// Fix the date so it is correctly being shown
const parseDate = (datee: Date | string) => {
  const date = "" + datee
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


async function Blog() { 
  if (await getBlogs() == null){
    return <h1>Blog Catalog</h1>
  }
  
  const { blogs } = await getBlogs(); // get the blogs
  if (blogs == null) {   // Handle the null case
    return(
    <h1>Blog Catalog</h1> // Don't give any blogs
    )
  }

  return ( 
      <>
      <h1>Blog Catalog</h1>
      <div className={styles.search}>
      { blogs.map( (blog : IBlog) => {
          blog.date = parseDate(blog.date);
          return (<BlogPreview 
                    {...blog}
                    key={blog.slug}
                  />
                  )}
                  )}
      </div>
      </>
  )
}

export default Blog;
