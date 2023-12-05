import React from 'react';
import styles from './styles.module.css';
import Header from './Header';

function Home() {
    return(
        <main className={styles.home}>
            <div className={styles.home_label}>
                <hr/>
                HOME
            </div>
            <Header/>
        </main>
    )
}

export default Home;