// import React from 'react';
// import Link from "next/link";
// import { IBlog} from '@/database/blogSchema';

// import  Comment from './comment'


// export default function BlogPreview({title, slug, date, description, content, comments} : IBlog) {
//   console.log(comments);
//   return (

//     <div>
//       <h3 className="blog-title">{title}</h3>
//       <div className="blog-container">
//         <p>{description}</p>
// 		    <p>{date.toDateString()}</p>
//         <Link href={slug}>Read More</Link>
        
            
//       </div>
// 	  </div>

//   );
// }

// // 		<Image src="./imageLinkHere" alt="img" width={500} height={500} ></Image>
import React from "react";
import type { IBlog } from "../database/blogSchema";
import style from "./blogPreview.module.css";
import Link from "next/link";

export default function BlogPreview(props: IBlog) {
  return (
    <div className={style.blogPreview}>
      <main>
        <h2>{props.title}</h2>
        <div>
          <p className={style.blogDetails}>{props.description}</p>
          <Link href="/blogs/[slug]" as={`/blogs/${props.slug}`}>
            <p className={style.blogMore}>Learn more</p>
          </Link>
        </div>
      </main>
    </div>
  );
}