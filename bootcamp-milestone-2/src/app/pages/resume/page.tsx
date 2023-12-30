import React from 'react';
import Layout from '@/app/components/layout';
import styles from './resume.module.css'; // Assuming you have a CSS module for styling

const ResumePage = () => {
    return (
        <Layout>
            <h1 className={styles.sectionTitle}>My Resume</h1>
            <div className={styles.resume}>
                {/* Education Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    <div className={styles.entry}>
                        <h3 className={styles.entryTitle}>Cal Poly SLO</h3>
                        <p className={styles.entryInfo}>B.S. Computer Science</p>
                    </div>
                </section>
                {/* Projects Section */}
                <section>
                    <h2 className ={styles.section}>Projects</h2>
                    <div className={styles.entry}>
                        <h3 className={styles.entryTitle}>SQL Data Transfer System</h3>
                        <p className={styles.entryInfo}>Power App to power automate to SQL</p>
                    </div>
                </section>
                {/* Experience Section */}
                <section>
                    <h2 className ={styles.section}>Expereince</h2>
                    <div className={styles.entry}>
                        <h3 className={styles.entryTitle}>IT Student Intern</h3>
                        <p className={styles.entryInfo}>County of San Luis Obispo IT department</p>
                    </div>
                </section>
                {/* Coursework Section */}
                <section>
                    <h2 className ={styles.section}>Coursework</h2>
                    <div className={styles.entry}>
                    <ul className={styles.courseworkList}>
                        <li>CSC 357</li>
                        <li>CSC 349</li>
                        <li>CSC 248</li>
                        <li>CSC 225</li>
                        <li>CSC 203</li>
                        <li>CSC 202</li>
                        <li>CSC 101</li>
                    </ul>
                    </div>
                </section>
                {/* Skills Section */}
                <section>
                    <h2 className ={styles.section}>Skills</h2>
                    <div className={styles.entry}>
                    <ul className={styles.skillsList}>
                        <li>Java, IntelliJ</li>
                        <li>Python, PyCharm</li>
                        <li>C, Unix</li>
                        <li>Microsoft Power Platform</li>
                    </ul>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default ResumePage;
