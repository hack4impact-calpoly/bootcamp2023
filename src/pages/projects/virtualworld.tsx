import style from '@/styles/projects.module.css'

export default function Home() {
    return (
      <section className={style.mainContainer}>
            
        <h3>Virtual World</h3>
        <div id='sectionLine'></div>

        <section className={style.tableOfContents}>
          <ul>
            <li><a href='#one'>Overview </a></li>
            <li>•</li>
            <li><a href='#two'>Demo </a></li>
            <li>•</li>
            <li><a href='#three'>Refactoring</a></li>
            <li>•</li>
            <li><a href='#four'>Pathfinding</a></li>
          </ul>
        </section>

        <section className={style.subSection}>
          <h2 id='one'>Overview</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus in. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Vivamus arcu felis bibendum ut. Volutpat diam ut venenatis tellus in. Nisl vel pretium lectus quam. Erat nam at lectus urna duis. Velit scelerisque in dictum non consectetur a erat nam at. Aliquet bibendum enim facilisis gravida. Ultrices mi tempus imperdiet nulla. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Duis tristique sollicitudin nibh sit amet. Auctor urna nunc id cursus metus aliquam eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nisl tincidunt eget nullam non nisi est. Suspendisse sed nisi lacus sed viverra tellus.</p>
        </section>

        <section className={style.subSection}>
          <h2 id='two'>Demo</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus in. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Vivamus arcu felis bibendum ut. Volutpat diam ut venenatis tellus in. Nisl vel pretium lectus quam. Erat nam at lectus urna duis. Velit scelerisque in dictum non consectetur a erat nam at. Aliquet bibendum enim facilisis gravida. Ultrices mi tempus imperdiet nulla. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Duis tristique sollicitudin nibh sit amet. Auctor urna nunc id cursus metus aliquam eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nisl tincidunt eget nullam non nisi est. Suspendisse sed nisi lacus sed viverra tellus.</p>
        </section>

        <section className={style.subSection}>
          <h2 id='three'>Refactoring</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus in. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Vivamus arcu felis bibendum ut. Volutpat diam ut venenatis tellus in. Nisl vel pretium lectus quam. Erat nam at lectus urna duis. Velit scelerisque in dictum non consectetur a erat nam at. Aliquet bibendum enim facilisis gravida. Ultrices mi tempus imperdiet nulla. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Duis tristique sollicitudin nibh sit amet. Auctor urna nunc id cursus metus aliquam eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nisl tincidunt eget nullam non nisi est. Suspendisse sed nisi lacus sed viverra tellus.</p>
        </section>

        <section className={style.subSection}>
          <h2 id=''>Pathingfinding</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut venenatis tellus in. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Vivamus arcu felis bibendum ut. Volutpat diam ut venenatis tellus in. Nisl vel pretium lectus quam. Erat nam at lectus urna duis. Velit scelerisque in dictum non consectetur a erat nam at. Aliquet bibendum enim facilisis gravida. Ultrices mi tempus imperdiet nulla. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Duis tristique sollicitudin nibh sit amet. Auctor urna nunc id cursus metus aliquam eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Nisl tincidunt eget nullam non nisi est. Suspendisse sed nisi lacus sed viverra tellus.</p>
        </section>

      </section>
    );
  }
