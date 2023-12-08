import React from 'react';
import styles from './styles.module.css';
import images from './images';

function AboutUs() {
    return(
        <main className={styles.container}>
            <div className={styles.about}>
                <img className={styles.about_image} src={images['desktopHero']}/>
                <section className={styles.about_content}>
                    <h1>
                        About
                    </h1>
                    <div className={styles.about_text}>
                        <hr/>
                        <h2>
                            Your team of professionals
                        </h2>
                        <p>
                            Our small team of world-class 
                            professionals will work with 
                            you every step of the way. 
                            Strong relationships are at 
                            the core of everything we do. 
                            This extends to the relationship 
                            our projects have with their 
                            surroundings.  
                        </p>
                    </div>
                </section>
            </div>

        </main>
    )
}

export default AboutUs;