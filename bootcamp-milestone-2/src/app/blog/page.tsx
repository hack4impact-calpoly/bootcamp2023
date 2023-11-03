
import blogStyles from "@/app/blog/blog.module.css"

export interface Blog {
    title: string,
    date: string,
    description: string,
    slug: string
}

const myList: Blog[] = [
    {
        title: "First time using TypeScript!",
        date: "October 18th, 2023",
        description: "After a challenging process of setting up Node and TypeScript, we're up and running.",
        slug: "@/app/blog"
    },
    {
        title: "Sitting in my bed coding!",
        date: "October 18th, 2023",
        description: "At least my lovely GF is here with me.",
        slug: "@/app/blog"
    }
]


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
