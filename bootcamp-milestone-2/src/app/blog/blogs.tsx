import styles from "./blog.module.css";
type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

export const blogs: Blog[] = [
  {
    title: "Hello, World!",
    date: "2021-01-01",
    description: "My first blog post.",
    slug: "hello-world",
  },
  {
    title: "Hello, World, Again!",
    date: "2021-01-02",
    description: "My second blog post.",
    slug: "hello-world-again",
  },
];

export function BlogPreview({ blog, index }: { blog: Blog; index: number }) {
  return (
    <div className={styles.blogpost}>
      <h4 className={styles.smallHeading}>{blog.title}</h4>
      <p className={styles.date}>{blog.date}</p>
      <p className={styles.description}>{blog.description}</p>
    </div>
  );
}
