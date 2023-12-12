import React from 'react';
import styles from './styles.module.css';
import icons from '`/icons';
import Features from './Features';
import images from './images';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import {motion} from 'framer-motion';
import { fadeInVariant } from './Variants/Variants.js';

function Featured () {
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const [tablet] = useMediaQuery('(max-width: 900px)');

    const changeImage = () => {
        if(mobile)
            return 'mobile';
        else if(tablet)
            return 'tablet';
        else    
            return 'desktop';
    }

    return(
        <section className={styles.featured}>
            <h1>
                Featured
            </h1>
            <button>
                See All
                <img className={styles.arrow} src={icons['leftArrow']}/>
            </button>
            {
                Features.map((feature, i) => {
                    const image = feature.url[changeImage()];
                    return (
                        <motion.div 
                            className={styles.feature} 
                            key={i}
                            initial='hidden'
                            whileInView='show'
                            variants={fadeInVariant}
                            viewport={{once: true, amount: 0.6}}
                            transition={{staggerChildren: 0.6}}
                            style={{backgroundImage: `url(${images[image]})`}}>
                                <div className={styles.overlay}></div>
                                <motion.span variants={fadeInVariant}>
                                    {i + 1}
                                </motion.span>
                                <div className={styles.feature_content}>
                                    <motion.h2 variants={fadeInVariant}>
                                        {feature.title}
                                    </motion.h2>
                                    <motion.a variants={fadeInVariant}>
                                        View All Projects
                                    </motion.a>                                
                                </div>
                        </motion.div>
                    )
                })
            }
        </section>
    )
}

export default Featured;