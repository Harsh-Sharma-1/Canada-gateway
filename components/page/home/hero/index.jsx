import React from 'react';
import styles from './styles.module.scss';
const Hero = ({ text }) => {
    return (
        <div className={styles.container}>
            <div>
                <h1>
                    <mark>{text}</mark>
                </h1>
            </div>
        </div>
    );
};

export default Hero;
