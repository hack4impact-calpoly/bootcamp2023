import BlogPreview from '@/components/blogPreview';
import currentBlogList from '../blogData';

export default function BlogPage() {
    return (
        <>
            <h1 className="page-title">Blog Page</h1>

            <div>
                {currentBlogList.map(blog =>
                    <BlogPreview  {...blog} /> // This is how we call the component
                )}
            </div>
        </>
    )
}