/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './styles.module.scss';
const GuidanceInfo = () => {
    return (
        <div className={styles.container}>
            <h1>Get Guidance now</h1>
            <p>
                We will be discussing regarding your queries related to Study in
                Canada in detail. Pop your questions and we'll be happy to
                assist over 1 hour consultation
            </p>
            <div>
                <span className={styles.card}>
                    For <span>1 hour</span>
                </span>
                <span className={styles.card}>
                    On <span>Phone Call</span>
                </span>
                <span className={styles.card}>
                    at <span>$100 CAD</span>
                </span>
            </div>
        </div>
    );
};

export default GuidanceInfo;
