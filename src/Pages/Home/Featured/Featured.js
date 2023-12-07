import React from 'react';
import styles from './styles.module.css';
import icons from '`/icons';

function Featured () {
    return(
        <section className={styles.featured}>
            <h1>
                Featured
            </h1>
            <button>
                See All
                <img className={styles.arrow} src={icons['leftArrow']}/>
            </button>
            <div className={styles.feature}>
                <span>
                    1
                </span>
                <h2>
                    Project Del Sol
                </h2>
                <p>
                    View All Projects
                </p>
            </div>
        </section>
    )
}

export default Featured;