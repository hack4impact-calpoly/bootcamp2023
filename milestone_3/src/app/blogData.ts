export interface Blog {
    title: string;
    date: string;
    description: string;
    slug: string;
  };

  
  const blogs: Blog[] = [
    {
      title: "Making Fried Rice",
      date: "10-13-23",
      description:
        "In this culinary adventure, I set out to make chicken fried rice from scratch. Armed with fresh ingredients like tender chicken, colorful vegetables, and aromatic garlic and ginger, I embarked on a flavorful journey. The process involved dicing, chopping, and stir-frying in a hot pan, with whisked eggs lending that classic fried rice texture. The result was a symphony of aromas and flavors, with the nutty hint of sesame oil and the umami goodness of soy sauce infusing every grain of fluffy, fragrant rice. The dish was not only a testament to patience and preparation but also a crowd-pleaser, ready to be customized to personal tastes and shared with loved ones. Cooking chicken fried rice from scratch is a rewarding culinary endeavor, offering a delightful reward for your time and effort.",
      slug: "blog/fried-rice.html",
    },
    {
      title: "Why I Like Cats",
      date: "10-22-23",
      description: "They're so chill.",
      slug: "blog/cat.html",
    },
  ];
  
  
    
  export default blogs;    