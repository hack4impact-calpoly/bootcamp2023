import React from "react";
import style from "./page.module.css";

export default function HomePage() {
    return (
      <>
      <section className={style.header}>
        <div className={style.text_box}>
          <h1>Wesley Luu Portfolio</h1>
          <h3> <p className={style.p}> </p> A computer engineering student, who is a highly motivated individual seeking to use programming and analytical skills to create meaningful impact. I am a quick learner and intrested in the field of software development.</h3>
        </div>  
      </section>

      <section className={style.mh_skills}>
        <div className={style.mh_skills_container}>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className={style.mk_skills_inner}>
                        <div className={style.mh_professional_skills}>
                            <h3>Technical Skills</h3>
                            <div className={style.each_skills}>
                                <div className={style.candidatos}>
                                    <div className={style.parcial}>
                                        <div className={style.info}>
                                            <div className={style.nome}>Python</div>
                                            <div className={style.percentage_num}>95%</div>
                                        </div>
                                        <div className={style.progressBar}>
                                            <div className={style.percentagem} style={ {width: '95%'}}></div>
                                        </div>

                                    </div>
                                </div>

                                
                                <div className={style.candidatos}>
                                    <div className={style.parcial}>
                                        <div className={style.info}>
                                            <div className={style.nome}>Java</div>
                                            <div className={style.percentage_num}>75%</div>
                                        </div>
                                        <div className={style.progressBar}>
                                            <div className={style.percentagem} style={ {width: '75%'}}></div>
                                        </div>

                                    </div>
                                </div>

                                <div className={style.candidatos}>
                                    <div className={style.parcial}>
                                        <div className={style.info}>
                                            <div className={style.nome}>Javascript</div>
                                            <div className={style.percentage_num}>80%</div>
                                        </div>
                                        <div className={style.progressBar}>
                                            <div className={style.percentagem} style={ {width: '50%'}}></div>
                                        </div>

                                    </div>
                                </div>

                                <div className={style.candidatos}>
                                    <div className={style.parcial}>
                                        <div className={style.info}>
                                            <div className={style.nome}>HTML</div>
                                            <div className={style.percentage_num}>80%</div>
                                        </div>
                                        <div className={style.progressBar}>
                                            <div className={style.percentagem} style={ {width: '50%'}}></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>
    );

}