import React from "react";
import style from "./foodPreview.module.css";
import type { Food } from "@/app/foodData";
import Image from "next/image";

export default function FoodPreview(props: Food) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <div className={style.foodEntry}>
      <h2>{props.title}</h2>
      <div className={style.foodImage}>
        <Image
          src={props.image}
          width={200}
          height={200}
          alt="food image"
        ></Image>
      </div>
      <p>
        <strong>Ingredients:</strong>
      </p>
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
