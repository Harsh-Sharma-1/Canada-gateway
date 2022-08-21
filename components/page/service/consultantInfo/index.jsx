import React from 'react';
import styles from './styles.module.scss';
import Fade from 'react-reveal/Fade';
const ConsultantInfo = () => {
    return (
        <div className={styles.container}>
            <Fade left>
                <div className={styles.left}>
                    <h2>Get Consultancy by expert</h2>

                    <h3>Dr. Akash singh</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam vel tincidunt augue. Maecenas et molestie libero.
                        Maecenas ultrices neque vitae mauris finibus, vitae
                        sodales ex dapibus. Mauris quis pretium tortor,
                        tristique ornare quam. Aenean dapibus orci mauris, non
                        mollis lorem cursus sed. Phasellus rutrum laoreet erat.
                        Quisque semper interdum arcu, nec eleifend elit
                        efficitur ut. Vivamus ac lorem et turpis condimentum
                        posuere a et sapien. Duis ac lorem libero. Vestibulum
                        eleifend egestas rutrum. Maecenas a luctus tortor. Sed
                        mollis eros lorem, ut dapibus magna lobortis vitae.
                    </p>
                </div>
            </Fade>
            <Fade right>
                <div className={styles.right}>
                    <img alt='canada gateway' src='../static/expert.png' />
                </div>
            </Fade>
        </div>
    );
};

export default ConsultantInfo;
