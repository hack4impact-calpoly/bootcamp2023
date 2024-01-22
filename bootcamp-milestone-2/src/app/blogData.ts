export interface Blog {
  name: string;
  description: string;
  image: string;
  posted: string;
  text: string;
}

const blogs: Blog[] = [
  {
    name: "My Internship @ Wells Fargo Technology",
    posted: "9/30/2023",
    description:
      "I spent this past summer developing internal tools for Wells Fargo Technology using the full stack!",
    text: "At the end of this summer, I finished up my SWE Internship at Wells Fargo Technology. It was an amazing experience getting to work on the full stack with my team members, and connecting with employees and other interns. This summer I was tasked with developing a web app for our business teams that was able to cut their execution time almost in half! I was able to make their requests into reality and got to problem solve independently. I greatly improved the range and depth of my skills in HTML, CSS, Javascript, jQuery, Bootstrap, .NET and SQL. Not only did I improve my coding skills, but got to further experience working in industry. Special thanks to my manager Habib Yaghoubi and my teammates Marc and CJ for all your support, and Tali Bray for taking the time to get to know the interns!",
    image: "/wells_fargo.jpeg",
  },
  {
    name: "Attending Grace Hopper Celebration 2023!",
    posted: "10/17/2023",
    description:
      "I got to attend an amazing gathering of women and non-binary folk in technology!",
    text: "This school year I had the amazing opportunity the attend the Grace Hopper Celebration in Orlando! I'm so grateful to have been chose to go - I got to meet so many amazing female and non binary people and learn about their passion and excitement for tech.I felt so empowered by seeing all these hardworking and influential women and non binary people gathered together! Including our voices in the future of tech is #thewayforward. ",
    image: "/ghc.jpeg",
  },
];

export default blogs;
