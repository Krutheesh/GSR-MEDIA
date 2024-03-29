import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import RecentWorks from '../RecentWork/RecentWorks';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import About from '../About/About';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Client></Client>
            <Service></Service>
            <About/>
            <RecentWorks></RecentWorks>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;