import React, { useState } from 'react';
import CardList from '../components/page/services/cardlist';
import Hero from '../components/page/services/hero';
import SearchBox from '../components/page/services/searchbox';

const Services = () => {
    const [searchItem, setSearchItem] = useState('');

    return (
        <>
            <Hero text={'Our Services'} />
            <SearchBox onChange={setSearchItem} />
            <CardList searchItem={searchItem} />
        </>
    );
};

export default Services;
