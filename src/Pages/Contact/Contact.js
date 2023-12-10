import React from 'react';
import styles from './styles.module.css';
import Header from './Header';
import ContactDetails from './ContactDetails';

function Contact() {
    return(
        <main className={styles.container}>
            <Header/>
            <ContactDetails/>
        </main>
    )
}

export default Contact;