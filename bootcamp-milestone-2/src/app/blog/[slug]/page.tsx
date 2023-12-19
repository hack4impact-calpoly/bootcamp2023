import styles from "./page.module.css"
import blogs from "../../blogData.ts"
import BlogPost from '../../components/blogPost';
// import { error } from "console";
import { useRouter } from 'next/router'


/// FIX THE ROUTING and then the java script then make it and 

// type Props = {
//     params: { slug: string}
// }
// { params }: Props

type Props = {
    params: {slug : string}
}

export default function IndvidualBlog({ params: { slug }}: Props) {
    let found = false
    let blogNum = 0
    for (let index = 0; index < blogs.length; index++) {
        if (slug === blogs[index].slug){
            found = true
            blogNum = index
        }
    }

    if (found){
        return(
        <>
        <h1>Blog Post</h1>
        <BlogPost
            {...blogs[blogNum]}
        />
        </>
        )
    } else {
        return (
            <div className={styles.error}>
            <h1> Error: Blog &quot;{slug}&quot; Not Found </h1>
            </div>
        )
    }

}
    
    
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