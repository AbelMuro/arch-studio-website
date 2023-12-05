import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import common from '`/icons';
import icons from './icons';

function MobileNavigationBar() {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef();
    const menuRef = useRef();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleLink = () => {

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
                <img className={styles.nav_logo} src={common['logo']}/>
                <img className={styles.nav_menu} src={icons['hamburger']} onClick={handleOpen}/>
            </nav>        
            <div className={styles.overlay} ref={overlayRef}></div>
            <menu className={styles.menu} ref={menuRef}>
                <ul className={styles.menu_links}>
                    <li onClick={handleLink}>
                        <a>
                            Portfolio
                        </a>
                    </li>
                    <li onClick={handleLink}>
                        <a>
                            About Us
                        </a>                            
                    </li>
                    <li onClick={handleLink}>
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