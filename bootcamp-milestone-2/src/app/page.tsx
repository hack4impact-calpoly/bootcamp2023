
import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <div id='profPic'>
          <Image id={styles.profPic} src="/PicForWebsite.jpeg" alt='A pic of me' width={180} height={260}></Image>
        </div>
        <div className={styles.aboutTexts}>
          <h1 className={styles.para}>Who Am I?</h1>
          <p className={styles.para}>
            I'm a Student Computer Engineer currently pursuing my degree at Cal
            Poly SLO. My academic journey has been marked by a profound passion
            for Web Development and Software Engineering, as well as a
            relentless pursuit of best practices in front-end architecture.
            Beyond the classroom, I thrive on learning the intricacies of
            unfamiliar systems, always striving to stay ahead in the
            ever-evolving tech landscape. When I'm not immersed in code and
            algorithms, you'll find me playing baseball or golf. But perhaps the
            most cherished moments in life involve hanging out with friends,
            where I find inspiration, relaxation, and the best of times. With a
            proven track record of effective collaboration in cross-functional
            teams and a strong commitment to driving project success through
            technical expertise, I am highly motivated and enthusiastic about
            contributing to the triumph of dynamic organizations. Thanks for
            visiting, and I look forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  )
}
