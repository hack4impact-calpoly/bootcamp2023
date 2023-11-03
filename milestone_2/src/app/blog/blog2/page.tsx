import Image from 'next/image'
import styles from '../page.module.css'
import PageTitle from "@/components/page-title";


export default function Blog2() {
  return (
    <div>
        <main>        
            <div className="content">
                <div className="blog">
                    <div className="blog-title">
                    Why Tart Frozen Yogurt is the Best Dessert
                    </div>
                    <div className="blog-date">2023-10-23</div>
                    <div className="blog-image">
                        <Image
                            src="/froyo.png"
                            alt="froyo"
                            width="500"
                            height="500"
                        />

                    </div>
                    <div className="blog-content">
                    Tart flavored frozen yogurt, often referred to as "froyo," has taken the dessert world by storm, and for good reason. It's a delightful treat that has captured the hearts of dessert enthusiasts far and wide. What makes tart frozen yogurt stand out as the best dessert option? Well, it all comes down to the perfect balance it strikes between flavors, textures, and health-conscious choices. The tartness of the yogurt adds a delightful tang that cuts through the sweetness, providing a refreshing and zesty contrast that awakens your taste buds. This unique flavor profile makes it incredibly versatile, allowing you to pair it with an array of toppings and mix-ins to create a customized dessert tailored to your cravings. But the benefits of tart froyo don't stop at its flavor; it's also a healthier option compared to many other desserts. With lower fat and calorie content and the probiotic goodness of yogurt, it's a guilt-free indulgence that doesn't skimp on satisfaction. Whether you're a fan of fruit, nuts, chocolate, or a combination of all three, tart frozen yogurt can accommodate your desires while keeping your sweet tooth in check. It's a dessert that offers the best of both worlds, making it a crowd-pleaser for the health-conscious and the flavor aficionados alike.
                    </div>
                </div>
            </div>


        </main>
    </div>

  )
}