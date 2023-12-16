import IBlog from "@/database/blogSchema";

type IComment = {
  user: string;
  comment: string;
  time: Date;
}

// typescript type (can also be an interface)
type IBlog = {
  title: string;
  date: Date;
  description: string; // for preview
  image: string;
  slug: string;
  comments: IComment[]; // array for comments
};

export default IBlog; 