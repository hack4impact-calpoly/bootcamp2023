import React from "react";
import Layout from "./components/layout";
import BlogPreview from "./components/blogPreview";
import { blogList } from "./pages/blog/blog";

const HomePage = () => {
    return (
        <Layout>
            <h1>Welcome to my Website!</h1>
            <p><strong>About me: </strong> I am a second year computer science student at Cal Poly Slo.
            <br></br> I work as a <strong> Student Intern</strong> at the County of San Luis Obispo.</p>
            
            {blogList.map(blog =>
                <BlogPreview {...blog} />
                )}

        </Layout>


    );
};