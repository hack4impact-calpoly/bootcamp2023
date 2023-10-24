type Blog = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const blogs: Blog[] = [
  {
    title: "5 ways to stay healthy",
    date: "10-jan-2023",
    description:
      "This blog talks about different ways to stay healthy both physically and mentally",
    slug: "blog1",
  },
  {
    title: "5 Essential Study Tips",
    date: "13-july-2023",
    description:
      "This blog gives 5 Essential Study Tips for Academic Success",
    slug: "blog2",
  },
];

function addblogs() {
  blogs.forEach((element) => {
    var htmlData = `
		<h1> ${element.title} </h1>
		<h3> ${element.date} </h3>
		<h3> ${element.description} </h3>
		<h3><a href="./${element.slug}.html">View full blog</h3>

		<br>
	`;
    document.getElementsByClassName("blog-container")[0].innerHTML += htmlData;
  });
}

addblogs();
