import React from 'react';
import Input from '../../../ui/input';
import styles from './styles.module.scss';

const Form = () => {
    return (
        <div className={styles.container}>
            <h1>Fill this form to book an Appointment</h1>
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

                <button type='submit'>Proceed to pay ($100 CAD)</button>
            </form>

            <img
                src='../static/dots.png'
                alt='canada-gateway'
                className={styles.leftdots}
            />
            <img
                src='../static/dots.png'
                alt='canada-gateway'
                className={styles.rightdots}
            />
        </div>
    );
};

export default Form;
