import React from 'react';
import styles from '../styles/Portfolio.module.css';

interface Project {
    title: string;
    description: string;
    link: string;
    image: string; // URL for project image
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
    // Add more projects as needed
];

const Portfolio = () => {
    return (
        <div className={styles.portfolio}>
            <h1>My Portfolio</h1>
            <div className={styles.projectGrid}>
                {projects.map((project, index) => (
                    <div className={styles.projectCard} key={index}>
                        <img src={project.image} alt={project.title} className={styles.projectImage} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;