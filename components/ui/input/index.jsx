import React from 'react';
import styles from './styles.module.scss';
const Input = ({ label, type, onChange, placeholder }) => {
    const handleChange = (e) => {
        if (onChange !== null) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={styles.container}>
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                type={type}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
