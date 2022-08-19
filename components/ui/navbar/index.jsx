import React, { useState } from 'react';
import styles from './styles.module.scss';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };
    return (
        <>
            <div className={styles.container}>
                <h3>
                    Canada <span>Gateway</span>
                </h3>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className={styles.phonecontainer}>
                <h3>
                    Canada <span>Gateway</span>
                </h3>
                <ul
                    style={{
                        top: menu ? '0vh' : '-100vh',
                    }}
                >
                    <li>Home</li>
                    <li>Services</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <BiX className='icon' onClick={toggleMenu} />
                </ul>
                <BiMenuAltRight onClick={toggleMenu} />
            </div>
        </>
    );
};

export default Navbar;
