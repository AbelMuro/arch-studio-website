import React from 'react';
import styles from './styles.module.css';
import projects from './Projects';
import images from './images';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import {motion} from 'framer-motion';
import { fadeInVariant } from './Variants/Variants.js';

function Portfolio() {
    const [mobile] = useMediaQuery('(max-width: 900px)');
    const [tablet] = useMediaQuery('(max-width: 600px)');

    const changeImage = () => {
        if(mobile)
            return 'mobile';
        else if(tablet)
            return 'tablet';
        else    
            return 'desktop';
    }

    return(
        <main className={styles.container}>
            <div className={styles.label}>
                <hr/>
                PORTFOLIO
            </div>
            <div className={styles.portfolio}>
                {
                    projects.map((project, i) => {
                        const url = project.url[changeImage()];

                        return(
                            <motion.section 
                                variants={fadeInVariant}
                                initial='hidden'
                                whileInView='show'
                                viewport={{once: true, amount: 0.6}}
                                key={i}
                                className={styles.project}
                                style={{backgroundImage: `url(${images[url]})`}}>
                                    <div className={styles.overlay}></div>
                                    <div className={styles.project_content}>
                                        <h1>
                                            {project.title}
                                        </h1>
                                        <p>
                                            {project.date}  
                                        </p>                                
                                    </div>
                            </motion.section>
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Portfolio;