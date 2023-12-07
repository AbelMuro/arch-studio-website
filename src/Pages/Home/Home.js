import React from 'react';
import styles from './styles.module.css';
import Header from './Header';
import Introduction from './Introduction';
import SmallTeam from './SmallTeam';
import Featured from './Featured';

function Home() {
    return(
        <main className={styles.home}>
            <div className={styles.home_label}>
                <hr/>
                HOME
            </div>
            <Header/>
            <Introduction/>
            <SmallTeam/>
            <Featured/>
        </main>
    )
}

export default Home;