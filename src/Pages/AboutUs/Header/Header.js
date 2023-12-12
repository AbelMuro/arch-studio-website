import React from 'react';
import styles from './styles.module.css';
import images from './images';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import {motion} from 'framer-motion';
import { imageVariant, whiteBoxVariant, titleVariant } from './Variants/Variants';

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
            <motion.div 
                className={styles.about} 
                initial='hidden' 
                whileInView='show'
                viewport={{once: true}}
                transition={{staggerChildren: 0.4}}
                >
                <motion.img 
                    variants={imageVariant}
                    className={styles.about_image} 
                    src={images[changeImage()]}/>
                <motion.section 
                    variants={whiteBoxVariant}
                    className={styles.about_content}>
                        <motion.h1 variants={titleVariant}>
                            About
                        </motion.h1>
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
                </motion.section>
            </motion.div>
    )
}

export default Header;