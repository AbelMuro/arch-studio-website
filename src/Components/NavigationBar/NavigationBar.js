import React from 'react';
import styles from './styles.module.css';
import icons from '`/icons';
import useMediaQuery from '~/Hooks/useMediaQuery';
import MobileNavigationBar from './MobileNavigationBar';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 600px)');

    return mobile ? <MobileNavigationBar/> :
            <nav className={styles.nav}>
                <ul className={styles.nav_links}>
                    <li>
                        <img className={styles.nav_logo} src={icons['logo']}/>
                    </li>
                    <li>
                        <a>Portfolio</a>
                    </li>
                    <li>
                        <a>About Us</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
    
}

export default NavigationBar;