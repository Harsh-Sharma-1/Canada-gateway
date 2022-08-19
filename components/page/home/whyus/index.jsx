import React from 'react';
import styles from './styles.module.scss';
const WhyUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h4>Why Canada gateway?</h4>
                <p>
                    We know that we are not the only firm in the market, so what
                    does make us any different?
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    vel tincidunt augue. Maecenas et molestie libero. Maecenas
                    ultrices neque vitae mauris finibus, vitae sodales ex
                    dapibus. Mauris quis pretium tortor, tristique ornare quam.
                    Aenean dapibus orci mauris, non mollis lorem cursus sed.
                    Phasellus rutrum laoreet erat. Quisque semper interdum arcu,
                    nec eleifend elit efficitur ut. Vivamus ac lorem et turpis
                    condimentum posuere a et sapien. Duis ac lorem libero.
                    Vestibulum eleifend egestas rutrum. Maecenas a luctus
                    tortor. Sed mollis eros lorem, ut dapibus magna lobortis
                    vitae.
                </p>
            </div>

            <div className={styles.right}>
                <img alt='canada gateway' src='./static/WhyUs.png' />
            </div>
        </div>
    );
};

export default WhyUs;
