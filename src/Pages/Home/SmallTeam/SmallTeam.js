import React from 'react';
import styles from './styles.module.css';
import icons from '`/icons';

function SmallTeam() {
    return(
        <section className={styles.container}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1>
                    Small team,<br/>
                    big ideas
                </h1>
                <button>
                    About Us
                    <img className={styles.arrow} src={icons['leftArrow']}/>
                </button>                
            </div>

        </section>
    )
}

export default SmallTeam;