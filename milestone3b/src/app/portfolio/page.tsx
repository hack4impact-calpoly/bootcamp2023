import React from 'react';
import Project from './project';
import '../../../styles.css';


const PortfolioPage: React.FC = () => {
  return (
    <div>
      <header>
        <title>Sammy's Portfolio!</title>
        <link rel="stylesheet" href="styles.css" />
      </header>
      <main>
        <h1 className="page-title">My Projects</h1>
        
        <Project
          name="Personal Portfolio Website"
          description="Designed and developed a visually appealing personal portfolio website using React, showcasing my proficiency in web development and featuring a collection of my projects and skills. Click on the image above!"
          imageUrl="spaykelscreenshot.png"
          projectUrl="https://spaykel.com/"
        />
        
        <Project
          name="Chess AI"
          description="Utilized Tensorflow library to train AI models in Chess strategy. Implemented Monte Carlo Tree Search recursive prediction algorithm for move selection. Employed algorithmic stepping and pruning into implementation to minimize data usage and maximize efficiency. Click on the image above!"
          imageUrl="chessai.png"
          projectUrl="https://github.com/keonroohparvar/AI_ChessEngine"
        />
      </main>

      <footer className="footer">
          © 2023 Sammy Paykel | All Rights Reserved
        </footer>
    </div>
  );
};

export default PortfolioPage;
