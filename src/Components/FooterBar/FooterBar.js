import React from 'react';
import styles from './styles.module.css';
import icons from './icons';
import common from '`/icons';
import {useNavigate} from 'react-router-dom';

function FooterBar(){
    const navigate = useNavigate();

    const handleLink = (e) => {
        if(!e.target.matches('li') && 
            !e.target.matches('a') && 
            !e.target.matches('img') &&
            !e.target.matches('button'))
            return;

        let url;
        
        if(e.target.matches('li'))
            url = e.target.firstElementChild.getAttribute('data-link');
        else    
            url = e.target.getAttribute('data-link');

        navigate(url);
        window.scrollTo({top: 0, behavior: 'smooth'});
    }


    return(
        <footer className={styles.footer}>
            <menu className={styles.footer_content}>
                <ul className={styles.footer_links} onClick={handleLink}>
                    <li>
                        <img className={styles.footer_logo} src={icons['logo']} data-link='/'/>    
                    </li>
                    <li>
                        <a data-link='/portfolio'>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a data-link='/aboutus'>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a data-link='/contact'>
                            Contact
                        </a>
                    </li>
                </ul>
                <button className={styles.footer_button} onClick={handleLink} data-link='/portfolio'>
                    See Our Portfolio
                    <img className={styles.arrow} src={common['leftArrow']}/>
                </button> 
                <div className={styles.whiteBox}></div>                
            </menu>
        </footer>
    )
}

export default FooterBar;