import React from 'react';
import styles from './styles.module.css';
import Header from './Header';
import ContactDetails from './ContactDetails';
import Connect from './Connect';
import Map from './Map';

function Contact() {
    return(
        <main className={styles.container}>
            <div className={styles.label}>
                <hr/>
                Contact
            </div>
            <Header/>
            <ContactDetails/>
            <Map/>
            <Connect/>
        </main>
    )
}

export default Contact;