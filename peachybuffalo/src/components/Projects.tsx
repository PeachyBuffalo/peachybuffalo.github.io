import React from 'react';
import styles from '../styles/Projects.module.css';

interface Project {
    title: string;
    description: string;
    link: string;
    image: string; 
}

const projects: Project[] = [
    {
        title: 'React Weather App',
        description: 'A weather application built with React and TypeScript that fetches data from a weather API.',
        link: 'https://example.com/weather-app',
        image: 'https://example.com/images/weather-app.png',
    },
    {
        title: 'E-commerce Store',
        description: 'An e-commerce platform with a shopping cart and user authentication.',
        link: 'https://example.com/ecommerce-store',
        image: 'https://example.com/images/ecommerce-store.png',
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website to showcase my projects and skills.',
        link: 'https://example.com/portfolio',
        image: 'https://example.com/images/portfolio.png',
    },
    
];

const Projects = () => {
    return (
        <div className={styles.projects}>
            <h1>My Projects</h1>
            <div className={styles.projectGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.project}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                        <img src={project.image} alt={project.title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
