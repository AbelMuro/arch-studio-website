import React from 'react';
import styles from './styles.module.css';
import images from './images';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function Header() {
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const [tablet] = useMediaQuery('(max-width: 800px)');

    const changeImage = () => {
        if(mobile)
            return 'mobileHero';
        else if(tablet)
            return 'tabletHero';
        else   
            return 'desktopHero';
    }

    return(
            <div className={styles.about}>
                <img className={styles.about_image} src={images[changeImage()]}/>
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
    )
}

export default Header;