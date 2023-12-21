import FoodPreview from "@/components/foodPreview";
import foods from "@/app/foodData";

export default function Home() {
  return (
    <div>
      {foods.map((food) => (
        <FoodPreview {...food} />
      ))}
    </div>
  );
}
