import connectDB from "./helpers/db";
//import Blog from "./database/blogSchema";
import IBlog from "./database/blogSchema"
import { get } from "http";
import { connect } from "http2";
import getBlogs from "./blog/page";

export interface Blog {
    content: string;
	title: string;
    date: string;
    description: string;
    slug: string;
    comments: string;
}
