import React from 'react';
import style from './blogPreview.module.css'

export default function BlogPreview() {
  return (
    <div>
        <div className="content">
            <ul id="blogs-list" className="blogs-list"></ul>
        </div>
        <div className={style.div}>
        <h3> Blog Name </h3>
        <div>
            // <img src="./imageLinkHere" alt="img" />
                    // we will replace img with Image, made to optimize images produced with Next.js
                    {/* <Image src="./imageLinkHere" alt="img" width={500} height={500} ></Image> */}
            <p>Blog description</p>
                    <p>Posted on...</p>
        </div>
        </div>
    </div>
  );
}