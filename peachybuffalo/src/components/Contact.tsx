import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contact}>
            <h2 className={styles.contactTitle}>Contact Us</h2>
            <form className={styles.contactForm}>
                <input type="text" className={styles.contactInput} placeholder="Your Name" />
                <input type="email" className={styles.contactInput} placeholder="Your Email" />
                <button type="submit" className={styles.contactButton}>Send</button>
            </form>
        </div>
    );
};

export default Contact;