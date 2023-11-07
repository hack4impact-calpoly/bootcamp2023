export default function secondBlogPost() {
  return (
    <main>
      <section className="blogContent">
        <div className="blogPageInformation">
          <h1 className="pageTitle">veggie dish???</h1>
          <p className="blogPostDescription">This is my second Blog post!</p>
          <p className="blogPostDate">Date Published: 10/22/23</p>
          <p className="blogPostContent">
            Nothing new to update here just yet. But to keep in theme with the
            food posts, enjoy a picture of a vegetable vodka-sauce meal-thingy
            that I made with my friends a couple weeks ago! Don't ask the
            inspiration, we just went to the store and bought random things and
            this is what came of that shopping spree.
          </p>
          <img
            src="images/vegetableDishSquare.png"
            alt="A pan full of sliced vegetables, topped with vodka sauce and basil."
            className="blogPostImage"
          />
        </div>
      </section>
    </main>
  );
}
