import React from 'react';
import styles from '../styles/AboutMe.module.css'; // Updated path to the CSS module

const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <h1>About Me</h1>
            <p>
                I have 9 years of experience as a Real Estate Agent/Broker, and began my career as a Product Development Specialist for a year prior to Real Estate. I started pursuing my Master's after identifying technology needs in my current field of Real Estate. The tools available for Realtors and Brokerages are limited and not tailored towards agents.
            </p>
            <p>
                As I began self-teaching with Python, followed by exploring other languages, I reached out to multiple programmers to ask for the best next steps. I was accepted into Georgia Institute of Technology's Master's program for Computer Science, specializing in Interactive Intelligence.
            </p>
            <h2>Projects</h2>
            <h3>Master's Program Projects:</h3>
            <ul>
                <li>Raven's Matrice IQ test solver using AI (Python, pandas, Pillow, cv2, scikit-learn)</li>
                <li>Unity Video Game Design with trailer, working beta, and group project (Unity, C#)</li>
                <li>Machine Learning for Hedge Fund Portfolios (matplotlib, pandas, and other Python libraries for creating signals for options, trades, etc.)</li>
                <li>American Sign Language Endless Runner Game (Fingerspelling, Gesture Recognition, Python, C#, and Unity)</li>
                <li>Envirocube - CO2 and Volatile Organic Compound detector (Arduino, Python, and prototyping)</li>
            </ul>
            <h3>Projects Outside of the Program:</h3>
            <ul>
                <li>Web App for Portfolio (Laravel TALL Stack run on AWS's Instance)</li>
                <li>SweetHomeSuite, a Web App for Real Estate similar to a dating app for pairing buyers and sellers, clients and agents, and resources for buyers and sellers (Using TypeScript and React)</li>
                <li>Arduino / ESP32 Bitcoin Clock</li>
                <li>Started a Social Polling App called Tizzy in college with VC funding</li>
            </ul>
        </div>
    );
};

export default AboutMe;
