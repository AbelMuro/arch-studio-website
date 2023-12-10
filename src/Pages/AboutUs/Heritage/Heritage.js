import React from 'react';
import styles from './styles.module.css';
import images from './images'

function Heritage(){
    return(
        <section className={styles.heritage}>
            <div className={styles.heritage_content}>
                <hr/>
                <h1>
                    Our Heritage 
                </h1>
                <p>
                    Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.<br/><br/>
                    Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. <br/><br/>
                    Our small team of world-class professionals provides input on every project.
                </p>
            </div>
            <img className={styles.heritage_image} src={images['heritage']}/>
        </section>
    )
}

export default Heritage;