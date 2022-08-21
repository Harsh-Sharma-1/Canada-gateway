import React, { useState } from 'react';
import styles from './styles.module.scss';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    const router = useRouter();

    const clickHandler = () => {
        setMenu(false);
    };
    return (
        <>
            <div className={styles.container}>
                <h3
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    Canada <span>Gateway</span>
                </h3>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/services'>Services</Link>
                    </li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className={styles.phonecontainer}>
                <h3
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    Canada <span>Gateway</span>
                </h3>
                <ul
                    style={{
                        top: menu ? '0vh' : '-100vh',
                    }}
                >
                    <li onClick={clickHandler}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li onClick={clickHandler}>
                        <Link href='/services'>Services</Link>
                    </li>
                    <li onClick={clickHandler}>About us</li>
                    <li onClick={clickHandler}>Contact</li>
                    <BiX className='icon' onClick={toggleMenu} />
                </ul>
                <BiMenuAltRight onClick={toggleMenu} />
            </div>
        </>
    );
};

export default Navbar;
