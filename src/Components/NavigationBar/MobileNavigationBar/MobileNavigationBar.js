import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import common from '`/icons';
import icons from './icons';
import {useNavigate} from 'react-router-dom';

function MobileNavigationBar() {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef();
    const menuRef = useRef();
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleLink = (e) => {
        if(!e.target.matches('li') && !e.target.matches('img')) return;
        const url = e.target.getAttribute('data-link');
        navigate(url);
        setOpen(false);
    }

    useEffect(() => {
        if(open){
            overlayRef.current.style.display = 'flex';
            setTimeout(() => {
                if(!overlayRef.current || !menuRef.current)
                    return;
                overlayRef.current.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
                menuRef.current.style.transform = 'scaleY(1)';
            }, 10)
        }
        else{
            overlayRef.current.style.backgroundColor = '';
            menuRef.current.style.transform = '';
            setTimeout(() => {
                if(!overlayRef.current)
                    return;
                overlayRef.current.style.display = '';
            }, 200)
        }
    }, [open])

    return(
        <>
            <nav className={styles.nav}>
                <img className={styles.nav_logo} src={common['logo']} data-link='/' onClick={handleLink}/>                
                {
                    open ? <img className={styles.nav_close} src={icons['close']} onClick={handleOpen}/> :
                    <img className={styles.nav_menu} src={icons['hamburger']} onClick={handleOpen}/>
                }  
            </nav>        
            <div className={styles.overlay} ref={overlayRef} onClick={handleOpen}></div>
            <menu className={styles.menu} ref={menuRef}>
                <ul className={styles.menu_links} onClick={handleLink}>
                    <li data-link='/portfolio'>
                        <a>
                            Portfolio
                        </a>
                    </li>
                    <li data-link='/aboutus'>
                        <a>
                            About Us
                        </a>                            
                    </li>
                    <li data-link='/contact'>
                        <a>
                            Contact
                        </a>                            
                    </li>
                </ul>
            </menu>
        </>
    )
}

export default MobileNavigationBar;