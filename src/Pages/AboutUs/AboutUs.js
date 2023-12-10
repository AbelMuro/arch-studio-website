import React from 'react';
import Header from './Header';
import Heritage from './Heritage';
import Leaders from './Leaders';
import styles from './styles.module.css';


function AboutUs() {

    return(
        <main className={styles.container}>
            <div className={styles.label}>
                <hr/>
                About Us
            </div>
            <Header/>
            <Heritage/>
            <Leaders/>
        </main>
    )
}

export default AboutUs;