import React from 'react';
import Banner from './Banner';
import HeroPart from './HeroPart';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info></Info>
            <Services></Services>
            <HeroPart></HeroPart>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;