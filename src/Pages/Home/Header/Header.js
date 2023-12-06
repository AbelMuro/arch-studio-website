import React, {useState, useRef, useEffect, useCallback} from 'react';
import styles from './styles.module.css';
import icons from '`/icons';
import desktopImages from './DesktopImages';
import tabletImages from './TabletImages';
import mobileImages from './MobileImages';
import {motion, AnimatePresence} from 'framer-motion';
import { slideInOut } from './Variants';
import slides from './Slides';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function ImageCarousel() {
    const [[slide, direction], setSlide] = useState([0, 1]);
    const contentRef = useRef();
    const interval = useRef();
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const [tablet] = useMediaQuery('(max-width: 800px)');

    const handleImage = (e) => {
        if(!e.target.matches('button')) return;

        const newSlide = e.target.getAttribute('data-slide');
        if(newSlide === slide)
            return;

        setSlide([newSlide, newSlide > slide ? 1 : -1]);
    }

    const images = useCallback(() => {
        if(mobile)
            return mobileImages[slide];
        else if(tablet)
            return tabletImages[slide]
        else
            return desktopImages[slide]
    }, [mobile, tablet, slide])
    
    useEffect(() => {
        const allButtons = document.querySelectorAll('button[data-slide]');
        allButtons.forEach((button) => {
            button.style.backgroundColor = '';
            button.style.color = '';
        });

        allButtons.forEach((button) => {
            if(button.getAttribute('data-slide') == slide){
                button.style.backgroundColor = 'black';
                button.style.color = 'white';
            }
        })
    }, [slide])

    useEffect(() => {
        if(mobile){
            interval.current = setInterval(() => {
                setSlide((prev) => {
                    if(prev[0] < 3)
                        return [prev[0] + 1, 1]
                    else    
                        return [0, -1];
                    });

            }, 4000)
        }
        else  
            clearInterval(interval.current);
        
    }, [mobile])

    return(
        <header className={styles.header} ref={contentRef}>
                <AnimatePresence initial={false} custom={direction}>            
                {  
                    slides.map((currSlide) => {
                        if(currSlide.id != slide) return;
                            return(
                                    <motion.section 
                                        key={slide}
                                        className={styles.header_content}
                                        style={{backgroundImage: `url(${images()})`}}
                                        variants={slideInOut}
                                        custom={direction}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                          }}>
                                            <div className={styles.header_text}>
                                                <h1>
                                                    {currSlide.title}
                                                </h1>
                                                <p>
                                                    {currSlide.desc}
                                                </p>
                                                <button>
                                                    See Our Portfolio
                                                    <img className={styles.arrow} src={icons['leftArrow']}/>
                                                </button>  
                                            </div>
                                    </motion.section>
                        )
                    })                                   
                }
                </AnimatePresence>
            <ul className={styles.header_carousel} onClick={handleImage}>
                <li>
                    <button data-slide='0'>
                        01
                    </button>                    
                </li>
                <li>
                    <button data-slide='1'>
                        02
                    </button>                    
                </li>
                <li>
                    <button data-slide='2'>
                        03
                    </button>                    
                </li>
                <li>
                    <button data-slide='3'>
                        04
                    </button>                    
                </li>
            </ul>
        </header>
    )
}

export default ImageCarousel;