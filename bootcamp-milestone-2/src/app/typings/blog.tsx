import {IComment} from "./comment"

type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
    piccap: string;
    picslug: string;
    comments: IComment[];
};

export type {Blog};