import React from 'react';
import ConsultantInfo from '../../components/page/service/consultantInfo';
import Form from '../../components/page/service/form';
import GuidanceInfo from '../../components/page/service/guidanceInfo';
import FinalHero from '../../components/page/service/hero';
import ServiceInfo from '../../components/page/service/serviceInfo';
import WhatYouCan from '../../components/page/service/whatyoucan';

const Service = () => {
    return (
        <div>
            <FinalHero text={'Study in Canada'} />
            <ServiceInfo />
            <WhatYouCan />
            <ConsultantInfo />
            <GuidanceInfo />
            <Form />
        </div>
    );
};

export default Service;
