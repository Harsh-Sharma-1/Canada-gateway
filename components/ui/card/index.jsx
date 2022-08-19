import React from 'react';
import styles from './styles.module.scss';
import { MdWorkOutline } from 'react-icons/md';
const Card = ({ heading, paragraph, Icon = MdWorkOutline }) => {
    return (
        <div className={styles.container}>
            <Icon />
            <h4>{heading}</h4>
            <p>{paragraph}</p>
            <div>Apply now</div>
        </div>
    );
};

export default Card;
