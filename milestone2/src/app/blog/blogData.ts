export type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
  };
  
  export const blogs: Blog[] = [
    {
      title: "Joe Mama",
      date: "10-23-2023",
      description: "Joe Mama is Nacho Dada",
      slug: "./blogs/blog1.html",
    },
    {
      title: "Nacho Dada",
      date: "10-23-2023",
      description: "Nacho Dada is Joe Mama",
      slug: "./blogs/blog2.html",
    },
    // Add more blog objects here if needed
  ];
  