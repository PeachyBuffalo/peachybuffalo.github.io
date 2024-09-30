import React from 'react';
import styles from '../styles/Skills.module.css';

const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Machine Learning',
    'HTML & CSS',
    'Git & GitHub',
    'Unity',
    'Arduino',
];

const Skills = () => {
    return (
        <div className={styles.skills}>
            <h1>My Skills</h1>
            <ul className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <li key={index} className={styles.skillItem}>
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
