import React from 'react';
import styles from './styles.module.css';
import Header from './Header';
import Introduction from './Introduction';

function Home() {
    return(
        <main className={styles.home}>
            <div className={styles.home_label}>
                <hr/>
                HOME
            </div>
            <Header/>
            <Introduction/>
        </main>
    )
}

export default Home;