// BlogSlug component

import React from 'react';
import { IPortfolio } from "../../database/portfolioSchema";
import Image from "next/image";
import Comment from './blogComment';



export default function BlogSlug(props: IPortfolio) {
  return (
    <>
      <div>
        <div>
            <Image src={props.img} alt="img" width={1000} height={800} />
        </div>
        <div>
          <p>{props.description}</p>
          <div>
                <h1>Comments</h1>
                {props.comments?.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}

            
            </div>
        </div>
      </div>
    </>
  );
}
