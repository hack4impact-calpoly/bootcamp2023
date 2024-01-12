import IBlog from "@/database/blogSchema";
import IComment from "@/commmentData"

type IBlog = {
  title: string;
  date: Date;
  description: string;
  image: string;
  slug: string;
  comments: IComment[]; // array for comments
};

export default IBlog; 