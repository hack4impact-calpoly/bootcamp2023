import connectDB from '../helpers/db'
import Blog from '../database/blogSchema'
import type { IBlog } from '../database/blogSchema'
  
  const blogs: IBlog[] = await getBlogs()

  let x=await getBlogs()
  console.log(x)

  async function getBlogs(){
    await connectDB() // function from db.ts before
  
    try {
        // query for all blogs and sort by date
        const blogs = await Blog.find().sort({ date: -1 }).orFail()
      
        // send a response as the blogs as the message
        return blogs
    } catch (err) {
        console.log(err)
        return []
    }
  }
  
 /* function addblogs() {
    blogs.forEach((element) => {
      var htmlData = `
          <h1> ${element.title} </h1>
          <h3> ${element.date} </h3>
          <h3> ${element.description} </h3>
          <h3><a href="./${element.slug}.html">View full blog</h3>
  
          <br>
      `;
      document.getElementsByClassName("blog-container")[0].innerHTML += htmlData;
    });
  }
  
  addblogs();*/

  export default blogs;
  