import BlogPreview from "@/components/BlogPreview/BlogPreview";
import { blogs } from "./data/blogData";

export default function Home() {
  const recentBlog = blogs[blogs.length-1];
  return (
    <main className="flex flex-col justify-center px-20">
      <h3 className="mb-5 text-white text-2xl font-semibold">About Asarel</h3>
      <p className="py-1.5 text-[#adb5bd] font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. In egestas erat
        imperdiet sed euismod nisi. Fames ac turpis egestas maecenas pharetra
        convallis posuere. Neque gravida in fermentum et sollicitudin ac orci.
        Urna cursus eget nunc scelerisque viverra mauris in. Arcu bibendum at
        varius vel pharetra vel.
      </p>
      <p className="py-1.5 text-[#adb5bd] font-light">Nunc sed id semper risus in. Morbi blandit
        cursus risus at. Vulputate odio ut enim blandit volutpat maecenas. Sit
        amet aliquam id diam maecenas ultricies mi eget mauris. Augue eget arcu
        dictum varius duis at consectetur. Urna condimentum mattis pellentesque
        id. Justo laoreet sit amet cursus sit amet. Eget arcu dictum varius duis
        at. Non pulvinar neque laoreet suspendisse interdum consectetur libero
        id. Purus semper eget duis at tellus at urna condimentum. Commodo sed
        egestas egestas fringilla.
      </p>
      <h3 className="my-5 text-white text-xl font-semibold">Check out my most recent blog!</h3>
      <BlogPreview title={recentBlog.title} content={recentBlog.content} date={recentBlog.date} img={recentBlog.img} slug={recentBlog.slug} />
    </main>
  );
}
