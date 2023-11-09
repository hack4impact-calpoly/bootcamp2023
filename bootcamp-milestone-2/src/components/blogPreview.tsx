import React from 'react';
import type {Blog} from "../app/blogData";
import style from './blogPreview.module.css';

export default function BlogPreview({ title, description, image, date }: Blog) {
    return (
      <div>
        <h3> {title} </h3>
        <div>
          <img src={image} alt="img" />
          <p>{description}</p>
                  <p>{date}</p>
        </div>
      </div>
    );
  }