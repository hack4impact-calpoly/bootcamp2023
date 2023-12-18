import styles from './page.module.css'
import Link from "next/link";
import getProjects from './projectData'
import ProjectPreview from '@/components/projectPreview';


export default async function Home() {
    const projectPosts = await getProjects()
    console.log(projectPosts)
    if(projectPosts){
        return(  
            <main className = {styles.main}>
                <div className = "blog_container">
                {projectPosts.map(project => (
                /* we will soon add RecipePreview here */
                <div key={project._id}> 
                    <ProjectPreview  {...project._doc} /> 
                </div>
                )
                )}
                </div>
            </main>     
        )
    }
   
}
  