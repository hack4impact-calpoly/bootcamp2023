// components/PortfolioSection.tsx
import React from 'react';
import projects from '@/app/projects'; // Adjust the import path if necessary
import Style from '@/components/Portfolio/portfolio.module.css'
import Link from 'next/link';

const PortfolioSection: React.FC = () => {
  return (
    <section className={Style.portfolioContainer}>
          {projects.map((project, index) => (
          <div key={index} className={Style.project}>
            <h2>{project.title}</h2>
            <p>{project.date}</p>
            <p>{project.skills}</p>
            <p>{project.description}</p>
            <Link href={project.urlLink}>
            View Project
            </Link>
          </div>
        ))}
        </section>
  );
};

export default PortfolioSection;
