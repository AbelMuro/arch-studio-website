import React from 'react';
import styles from './styles.module.css';
import icons from '`/icons';
import Features from './Features';
import images from './images';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

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
                        <div 
                            className={styles.feature} 
                            key={i}
                            style={{backgroundImage: `url(${images[image]})`}}>
                                <div className={styles.overlay}></div>
                                <span>
                                    {i + 1}
                                </span>
                                <div className={styles.feature_content}>
                                    <h2>
                                        {feature.title}
                                    </h2>
                                    <a>
                                        View All Projects
                                    </a>                                
                                </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Featured;