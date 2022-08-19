/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Input from '../../../ui/input';
import styles from './styles.module.scss';

const SearchBox = ({ onChange }) => {
    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <h3>You're interested in ?</h3>
                <Input
                    type={'text'}
                    placeholder={'Search here ...'}
                    label={''}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default SearchBox;
