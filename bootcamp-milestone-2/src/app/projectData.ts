import { Comment } from "./commentData";

export interface Project {
  name: string;
  description: string;
  href: string;
  src: string;
  alt: string;
  comments: Comment[];
}