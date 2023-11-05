import BlogPreview from '@/app/components/recipePreview'
import { recipeArray } from "@/app/recipeData"
import style from '@/app/FavoriteFoods/page.module.css'


export default function favoriteFoodsList() {
    return (
        <div className={style.container}>
            <h1 className={style.header}>These are some of my favorite foods</h1>
            {recipeArray.map(blog => (
            <BlogPreview
            key={blog.foodname} 
            foodname={blog.foodname}
            description={blog.description}
            image={blog.image}
            ingredients={blog.ingredients}
            instructions={blog.instructions}
            />
        ))}
        </div>
    )
    
}