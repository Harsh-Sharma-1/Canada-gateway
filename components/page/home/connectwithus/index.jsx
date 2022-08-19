import React from 'react';
import Input from '../../../ui/input';
import Fade from 'react-reveal/Fade';

import styles from './styles.module.scss';

const ConnectWithUs = () => {
    return (
        <div className={styles.container}>
            <Fade bottom>
                <div>
                    <h1>Connect with us</h1>
                    <p>&nbsp;or, you can say connect with canada.</p>
                </div>
                <form action=''>
                    <Input
                        label={'Your Name'}
                        type={'text'}
                        placeholder={'Enter your name here ...'}
                        onChange={null}
                    />
                    <Input
                        label={'Your Contact'}
                        type={'phone'}
                        placeholder={'Enter your name here ...'}
                        onChange={null}
                    />

                    <Input
                        label={'Your Email'}
                        type={'email'}
                        placeholder={'Enter your name here ...'}
                        onChange={null}
                    />
                    <span>
                        <input type='checkbox' id='news' />
                        <label htmlFor='news'>
                            check it to get news related to canada on email.
                        </label>
                    </span>

                    <button type='submit'>Click to connect</button>
                </form>
            </Fade>
        </div>
    );
};

export default ConnectWithUs;
