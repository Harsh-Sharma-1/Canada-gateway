import React from 'react';
import Card from '../../../ui/card';
import styles from './styles.module.scss';
import { MdWorkOutline } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';


const CardList = () => {
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <Card
                    heading={'Work in Canada'}
                    paragraph={
                        'Did you know that you can migrate to Canada on the basis of your past work experience or sometimes no/minimal experience required?'
                    }
                    Icon={MdWorkOutline}
                />
                <Card
                    heading={'Study in Canada'}
                    paragraph={
                        'Did you know that you can migrate to Canada on the basis of your past work experience or sometimes no/minimal experience required?'
                    }
                    Icon={BsBook}
                />
                <Card
                    heading={'Permanent residency'}
                    paragraph={
                        'Did you know that you can migrate to Canada on the basis of your past work experience or sometimes no/minimal?'
                    }
                    Icon={AiOutlineHome}
                />
            </div>

            <div className={styles.list2}>
                <Card
                    heading={'Work in Canada'}
                    paragraph={
                        'Did you know that you can migrate to Canada on the basis of your past work experience or sometimes no/minimal experience required?'
                    }
                />
                <Card
                    heading={'Work in Canada'}
                    paragraph={
                        'Did you know that you can migrate to Canada on the basis of your past work experience or sometimes no/minimal experience required?'
                    }
                />
            </div>
        </div>
    );
};

export default CardList;
