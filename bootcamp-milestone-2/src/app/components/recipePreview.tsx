import React from "react";
import style from "./recipePreview.module.css";
import Image from "next/image";
import { Recipe, recipeArray } from "@/app/recipeData";

export default function BlogPreview({ foodname, description, ingredients, instructions, image }: Recipe) {
  return ( 
    <div className={style.container}>
      <div className={style.mainDiv}>
        <h3 className={style.Header}>Dish: {foodname}</h3>
        <div className={style.imgDiv}>
          <Image src={image} alt="img" width={200} height={150}/>
        </div>
        
        <div className={style.innerDiv}>
          <p className={style.description}>Description: {description}</p>
          <p className={style.ingredients}>Ingredients: {ingredients.join(', ')}</p>
          <p className={style.instructions}>How To: {instructions.join(',')}</p>
        </div>
      </div>
    </div>
  );
}
