import React from 'react';
import styles from './styles.module.scss';
import Fade from 'react-reveal/Fade';

const WhatYouCan = () => {
    return (
        <div className={styles.container}>
            <Fade left>
                <div className={styles.left}>
                    <img alt='canada gateway' src='../static/whatyoucan.png' />
                </div>
            </Fade>
            <Fade right>
                <div className={styles.right}>
                    <h4>With our help you can?</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel tincidunt augue. Maecenas et molestie libero.
                        Maecenas ultrices neque vitae mauris finibus, vitae
                        sodales ex dapibus. Mauris quis pretium tortor,
                        tristique ornare quam.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel tincidunt augue. Maecenas et molestie libero.
                        Maecenas ultrices neque vitae mauris finibus, vitae
                        sodales ex dapibus. Mauris quis pretium tortor,
                        tristique ornare quam.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel tincidunt augue. Maecenas et molestie libero.
                        Maecenas ultrices neque vitae mauris finibus, vitae
                        sodales ex dapibus. Mauris quis pretium tortor,
                        tristique ornare quam.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel tincidunt augue. Maecenas et molestie libero.
                        Maecenas ultrices neque vitae mauris finibus, vitae
                        sodales ex dapibus. Mauris quis pretium tortor,
                        tristique ornare quam.
                    </p>
                </div>
            </Fade>
        </div>
    );
};

export default WhatYouCan;
