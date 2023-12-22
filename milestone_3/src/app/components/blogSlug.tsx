// BlogSlug component

import React from 'react';
import { IBlog } from "../../database/blogSchema";
import { IComment } from '@/database/blogSchema';
import Comment from './blogComment';

export default function BlogSlug(props: IBlog) {
    return (
        <div>
            <div>
                {props.description}
            </div>
            <div>
                <h1>Comments</h1>
                {props.comments?.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}

            
            </div>
        </div>
    );
}
