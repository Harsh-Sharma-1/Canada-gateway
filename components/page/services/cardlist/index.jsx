/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { MdWorkOutline } from 'react-icons/md';
import { HiOutlineEmojiSad } from 'react-icons/hi';

import Card from '../../../ui/card';
import styles from './styles.module.scss';

const data = [
    {
        heading: 'Work in Canada',
        paragraph:
            'Did you know that you can migrate to Canada on the basis of your \
             past work experience or sometimes no/minimal experience required?',
        Icon: MdWorkOutline,
    },
    {
        heading: 'Study in Canada',
        paragraph:
            'Did you know that you can migrate to Canada on the basis of your \
             past work experience or sometimes no/minimal experience required?',
        Icon: MdWorkOutline,
    },
    {
        heading: 'Immigrate to Canada',
        paragraph:
            'Did you know that you can migrate to Canada on the basis of your \
             past work experience or sometimes no/minimal experience required?',
        Icon: MdWorkOutline,
    },
    {
        heading: 'Business Immigration',
        paragraph:
            'Did you know that you can migrate to Canada on the basis of your \
             past work experience or sometimes no/minimal experience required?',
        Icon: MdWorkOutline,
    },
    {
        heading: 'Legal Help',
        paragraph:
            'Did you know that you can migrate to Canada on the basis of your \
             past work experience or sometimes no/minimal experience required?',
        Icon: MdWorkOutline,
    },
    {
        heading: 'Work in Canada',
        paragraph:
            'Did you know that you can migrate to Canada on the basis of your \
             past work experience or sometimes no/minimal experience required?',
        Icon: MdWorkOutline,
    },
    {
        heading: 'Work in Canada',
        paragraph:
            'Did you know that you can migrate to Canada on the basis of your \
             past work experience or sometimes no/minimal experience required?',
        Icon: MdWorkOutline,
    },
    {
        heading: 'Work in Canada',
        paragraph:
            'Did you know that you can migrate to Canada on the basis of your \
             past work experience or sometimes no/minimal experience required?',
        Icon: MdWorkOutline,
    },
    {
        heading: 'Work in Canada',
        paragraph:
            'Did you know that you can migrate to Canada on the basis of your \
             past work experience or sometimes no/minimal experience required?',
        Icon: MdWorkOutline,
    },
];

const CardList = ({ searchItem }) => {
    const filteredData = data;

    if (searchItem.trim() !== '') {
        filteredData = data.filter((item) =>
            item.heading.toLowerCase().includes(searchItem.toLowerCase().trim())
        );
    }

    return (
        <div className={styles.container}>
            {filteredData.length > 0 ? (
                <div className={styles.listContainer}>
                    {filteredData.map((card, i) => (
                        <Card key={i} {...card} />
                    ))}
                </div>
            ) : (
                <div className={styles.emptyContainer}>
                    <h2>Sorry, there's no match for "{searchItem}"</h2>
                    <HiOutlineEmojiSad />
                </div>
            )}
        </div>
    );
};

export default CardList;
