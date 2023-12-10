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
            <header className={styles.header}>
                <img className={styles.header_image} src={images[changeImage()]}/>
                <section className={styles.header_content}>
                    <h1>
                        Contact
                    </h1>
                    <div className={styles.header_text}>
                        <hr/>
                        <h2>
                            Tell us about your project
                        </h2>
                        <p>
                            We’d love to hear more about your project. 
                            Please, leave a message below or give us a call. 
                            We have two offices, one in Texas and one in 
                            Tennessee. If you find yourself nearby, 
                            come say hello!
                        </p>
                    </div>
                </section>
            </header>
    )
}

export default Header;