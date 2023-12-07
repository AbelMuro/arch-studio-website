import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import common from '`/icons';

function FooterBar(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.footer_links}>
                <li>
                    <img src={icons['logo']}/>    
                </li>
                <li>
                    <a>
                        Portfolio
                    </a>
                </li>
                <li>
                    <a>
                        About Us
                    </a>
                </li>
                <li>
                    <a>
                        Contact
                    </a>
                </li>
            </ul>
            <button className={styles.footer_button}>
                See Our Portfolio
                <img className={styles.arrow} src={common['leftArrow']}/>
            </button>
            <div className={styles.whiteBox}></div>
        </footer>
    )
}

export default FooterBar;