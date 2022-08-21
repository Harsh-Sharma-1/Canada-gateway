import React from 'react';
import styles from './styles.module.scss';
import { MdWorkOutline } from 'react-icons/md';
import Fade from 'react-reveal/Fade';
import { useRouter } from 'next/router';
const Card = ({ heading, paragraph, Icon = MdWorkOutline }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/service/study-in-canada');
    };
    return (
        <Fade bottom>
            <div className={styles.container}>
                <Icon />
                <h4>{heading}</h4>
                <p>{paragraph}</p>
                <div onClick={handleClick}>Apply now</div>
            </div>
        </Fade>
    );
};

export default Card;
