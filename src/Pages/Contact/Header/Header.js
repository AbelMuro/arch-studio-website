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
            <motion.header 
                className={styles.header}
                initial='hidden'
                whileInView='show'
                viewport={{once: true}}
                transition={{staggerChildren: 0.4}}>
                    <motion.img 
                        variants={imageVariant}
                        className={styles.header_image} 
                        src={images[changeImage()]}/>
                    <motion.section 
                        variants={whiteBoxVariant}
                        className={styles.header_content}>
                            <motion.h1 variants={titleVariant}>
                                Contact
                            </motion.h1>
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
                    </motion.section>
            </motion.header>
    )
}

export default Header;