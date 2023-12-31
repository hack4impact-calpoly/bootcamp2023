// import styles from "./page.module.css";
import { IComment } from '../../../database/blogSchema';
import Comment from "../../components/comment";
import connectDB from "../../../helpers/db"
import Blog from '../../../database/blogSchema';

type Props = {
    params: { slug: string }
}

async function getBlog(slug: string) {
    await connectDB()
    
    try {
		
	    const blog = await Blog.findOne({slug}).orFail()
	    return blog

	} catch (err) {
	    return null
	}
}

export default async function BlogPage(pr: Props) {
    const blog = await getBlog(pr.params.slug);

	if (blog == null) {
        return (<main>
            <div>
                <h1>blog does not exist hahahah</h1>
            </div>
        </main>)
    } else {
        return (<main>
            <div className="container-fluid d-flex flex-column align-items-center">
                <div className="row justify-content-around align-items-center" style={{textAlign: "center", width: "85%", margin: "15px"}}>
                    <div className="col" style={{margin: "17px"}}>
                    <img src={blog.image2} className="d-block" style={{width: "100%"}}/>
                    </div>
                    <div className="col d-flex flex-column align-items-center">
                        <h1>{blog.title}</h1>

                        <p>{blog.para1}</p>
                        <p>{blog.para2}</p>
                    </div>
                </div>
                <div className="comments-wrapper">
                    <h4><u>Comments:</u></h4>
                    {blog.comments.map((comment: IComment, index: number) => (
                        <Comment key={index} comment={comment}/>
                    ))}
                </div>
            </div>
        </main>)
    }
}