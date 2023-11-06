import styles from './page.module.css'
import  {blogs}  from '../blogData';
import BlogPreview from '@/components/blogPreview';

export default function Home() {
    return(  
        <main className = {styles.main}>
            <div className = "blog_container">
            {blogs.map(blog => 
            /* we will soon add RecipePreview here */
            <BlogPreview  {...blog} /> 
            )}
            </div>
            <img className = "flower" src="flowers.JPG" alt = "flowers" width = "650" height = "1000"/>
        </main>     
    )
}

