import React from 'react';
import styles from './styles.module.scss';
import { MdWorkOutline } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
const Card = ({ heading, paragraph, Icon = MdWorkOutline }) => {
    return (
        <Fade bottom>
            <div className={styles.container}>
                <Icon />
                <h4>{heading}</h4>
                <p>{paragraph}</p>
                <div>Apply now</div>
            </div>
        </Fade>
    );
};

export default Card;
