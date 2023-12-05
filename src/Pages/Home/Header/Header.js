import React, {useState, useRef, useEffect} from 'react';
import styles from './styles.module.css';
import icons from '`/icons';
import images from './images';
import useMediaQuery from '~/Hooks/useMediaQuery.js';

function Header() {
    const [imageNum, setImageNum] = useState(0);
    const contentRef = useRef();
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const [tablet] = useMediaQuery('(max-width: 800px)');


    const handleImage = (e) => {
        if(!e.target.matches('button')) return;

        const num = e.target.getAttribute('data-id');
        setImageNum(num)

    }

    useEffect(() => {
        contentRef.current.style.backgroundImage = `url(${images[imageNum]})`
    }, [imageNum])

    useEffect(() => {
        const allButtons = document.querySelectorAll('.header_carousel button');
    }, [imageNum])

    return(
        <header className={styles.header} ref={contentRef}>
            <section className={styles.header_content}>
                <h1>
                    Project Paramour
                </h1>
                <p>
                    Project made for an art museum near Southwest London. 
                    Project Paramour is a statement of bold, modern architecture.
                </p>
                <button>
                    See Our Portfolio
                    <img className={styles.arrow} src={icons['leftArrow']}/>
                </button>                
            </section>
            <ul className={styles.header_carousel} onClick={handleImage}>
                <li>
                    <button data-id='0'>
                        01
                    </button>                    
                </li>
                <li>
                    <button data-id='1'>
                        02
                    </button>                    
                </li>
                <li>
                    <button data-id='2'>
                        03
                    </button>                    
                </li>
                <li>
                    <button data-id='3'>
                        04
                    </button>                    
                </li>
            </ul>
        </header>
    )
}

export default Header;