import React from 'react';
import styles from './styles.module.css';
import leaders from './AllLeaders';
import images from './images';

function Leaders() {
    return(
        <section className={styles.leaders}>
            <h1>
                The Leaders
            </h1>
            {
                leaders.map((leader) => {
                    const url = leader.image;
                    const name = leader.name;
                    const title = leader.title;

                    return(
                        <div className={styles.leader} key={name}>
                            <img src={images[url]}/>
                            <h2>
                                {name}
                            </h2>
                            <p>
                                {title}
                            </p>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Leaders;