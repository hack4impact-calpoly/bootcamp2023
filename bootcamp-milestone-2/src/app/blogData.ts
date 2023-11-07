export interface Blog {
  name: string;
  location: string;
  link: string;
}

const blogs: Blog[] = [
  {
    name: "Joe's Pho",
    location: "15070 Hesperian Blvd, San Leandro, CA 94578",
    link: "/pho",
  },
  {
    name: "Cholita Linda",
    location: "1337 Park St, Alameda, CA 94501",
    link: "/taco",
},
];

export default blogs; // This will allow us to access this data anywhere!
