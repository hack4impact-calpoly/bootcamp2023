import React from 'react';
import Layout from '@/app/components/layout';
import Image from 'next/image';
import Link from 'next/link';
import styles from './portfolio.module.css'; // Assuming you have a CSS module for styling

const PortfolioPage = () => {
    return (
        
        <Layout>
            <h1>My Portfolio</h1>
            <div className={styles.project}>
                <div className={styles.itemLink}>
                    <Link href="/">
                        <a><Image src="/flower.jpeg" alt="A nice flower" width={500} height={500} /></a>
                    </Link>
                </div>
                <div className={styles.projectDetails}>
                    <p className={styles.projectName}>Personal Website</p>
                    <p>Designed to show knowledge of web development.</p>
                    <Link href="/"><a>Learn more</a></Link>
                </div>
            </div>
        </Layout>
    );
};

export default PortfolioPage;
