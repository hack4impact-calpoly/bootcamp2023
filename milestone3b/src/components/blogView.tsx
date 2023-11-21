import { IBlog } from "@/database/blogSchema";

type BlogProps = {
    blog: IBlog;
};

function parseCommentTime(time: Date) {
    /*
    Parses MongoDB/TS date object
    :param time: date object
    :return: string reprsenting date
    */
    // Convert to Los Angeles time
    const losAngelesDate = new Date(
        time.toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
    );

    // Format the date as desired
    const formattedDate = losAngelesDate.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return formattedDate;
}

function Comment({ blog }: BlogProps) {
    return (
        <div className="blog-content">
            <img src={blog.image} />
            <h2 className="blog-title">{blog.title}</h2>
            <div className="blog-date">{parseCommentTime(blog.date)}</div>
            <div className="blog-description">{blog.description}</div>
        </div>
    );
}

export default Comment;
