import React from 'react';
import Header from './Header';
import Heritage from './Heritage';
import styles from './styles.module.css';


function AboutUs() {

    return(
        <main className={styles.container}>
            <Header/>
            <Heritage/>
        </main>
    )
}

export default AboutUs;