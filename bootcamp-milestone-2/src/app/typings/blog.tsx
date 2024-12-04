import { IComment } from "./comment";

type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
    pageDescription: string;
    picSlug1: string;
    picSlug2: string;
    picSlug3: string;
    comments: IComment[];
}

export type {Blog};