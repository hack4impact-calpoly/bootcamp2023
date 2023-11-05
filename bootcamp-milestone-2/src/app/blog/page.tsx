
import blogStyles from "@/app/blog/blog.module.css"

import {Blog, myList} from "./blogData";



function BlogPost ({title, date, description, slug}: Blog) {
    return ( 
        <div className={blogStyles.container}>
            <div className={blogStyles.post}>
                <div className={blogStyles.postHeader}>
                    <h1 className={blogStyles.title}>{title}</h1>
                    <p className={blogStyles.date}>{date}</p>
                </div>
            <p className={blogStyles.description}>{description}</p>
            <a className={blogStyles.more} href={ slug }>More</a>
            </div>
        </div>
       
    )
}

const blogElements = myList.map((blog, index) => (
    <BlogPost
        key={index}
        title={blog.title}
        date={blog.date}
        description={blog.description}
        slug={blog.slug}
    />
));

function BlogList() {
    return <div>
        <h1 className={blogStyles.sectionTitle}>My Recent Blog Posts</h1>
        {blogElements}
    </div>
}

export default BlogList;
