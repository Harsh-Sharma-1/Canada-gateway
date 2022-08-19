import Link from 'next/link';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Fade from 'react-reveal/Fade';

const services = [
    {
        id: 1,
        name: 'Study in Canada',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Morbi accumsan euismod justo, dictum ultricies ipsum fermentum \
             vitae. Quisque placerat leo eget ligula vehicula, ',
        image: './static/study.png',
    },
    {
        id: 2,
        name: 'Work in Canada',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Morbi accumsan euismod justo, dictum ultricies ipsum fermentum \
             vitae. Quisque placerat leo eget ligula vehicula, ',
        image: './static/work.png',
    },
    {
        id: 1,
        name: 'Immigrate to Canada',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
            Morbi accumsan euismod justo, dictum ultricies ipsum fermentum \
             vitae. Quisque placerat leo eget ligula vehicula, ',
        image: './static/immigrate.png',
    },
];

const ServiceList = () => {
    const [item, setItem] = useState(0);
    return (
        <div className={styles.container}>
            <Fade left>
                <div className={styles.left}>
                    <img
                        src={services[item].image}
                        alt='study in canada with canada gateway'
                    />
                </div>
            </Fade>
            <Fade right>
                <div className={styles.right}>
                    <ul>
                        {services.map((service, i) => (
                            <li
                                key={i}
                                className={i === item ? styles.active : ''}
                                onClick={() => setItem(i)}
                            >
                                <h4>{service.name}</h4>
                                <p>{service.content}</p>
                                <span
                                    style={{
                                        borderColor:
                                            i === item ? 'white' : 'black',
                                    }}
                                >
                                    <Link href={`/service/${service.id}`}>
                                        Learn more.
                                    </Link>
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <Link href={`/services`}>and much more.</Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ServiceList;
