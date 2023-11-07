import React from "react";
import style from "./portfolio.module.css";

export default function Portfolio() {
    return (
        <header>
        <h1 className={style.page_title}>Sameer's Portfolio</h1>
            <div className="project">
                <table className={style.table}>
                    <tr className={style.table_row_projects}>
                        <td className={style.td}>
                            <a className={style.project_link} href="index.html">
                                <p className={style.project_name}>Simply Sameer</p>
                                <p className={style.project_description}>This website contains my online resume, my portfolio of CS projects, my contact list, and the homescreen which directs you to all the different pages mentioned before.</p>
                                <div className={style.project_details}>
                                    <img className={style.project_details_image} src="Homescreen_2.png" alt="Homescreen of my personal website"/>
                                
                                </div> 
                            </a>
                        </td>
                        <td className={style.td}></td>
                        <td className={style.td}></td>
                    </tr>
                </table>
            </div>
        </header>
    );
}
