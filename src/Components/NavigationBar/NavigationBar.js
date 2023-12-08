import React from 'react';
import styles from './styles.module.css';
import icons from '`/icons';
import useMediaQuery from '~/Hooks/useMediaQuery';
import MobileNavigationBar from './MobileNavigationBar';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 600px)');
    const navigate = useNavigate();

    const handleLink = (e) => {
        if(!e.target.matches('a') && !e.target.matches('img')) return;

        const url = e.target.getAttribute('data-link');
        navigate(url);
    }   

    return mobile ? <MobileNavigationBar/> :
            <nav className={styles.nav}>
                <menu className={styles.nav_content}>
                    <ul className={styles.nav_links} onClick={handleLink}>
                        <li>
                            <img 
                                data-link='/'
                                className={styles.nav_logo} 
                                src={icons['logo']}/>
                        </li>
                        <li>
                            <a data-link='/portfolio'>Portfolio</a>
                        </li>
                        <li>
                            <a data-link='/aboutus'>About Us</a>
                        </li>
                        <li>
                            <a data-link='/contact'>Contact</a>
                        </li>
                    </ul>                    
                </menu>

            </nav>
    
}

export default NavigationBar;