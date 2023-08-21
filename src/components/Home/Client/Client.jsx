import React from 'react';
import CLinet from '../../../images/logos/airbnb.png'
import CLinet2 from '../../../images/logos/google.png'
import CLinet3 from '../../../images/logos/netflix.png'
import CLinet4 from '../../../images/logos/slack.png'
import CLinet5 from '../../../images/logos/uber.png'
const Client = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-6 gap-20 bg-red-600 px-10 items-center  lg:pl-28 py-[3rem] text-black ">
            <img src={CLinet} className='bg-white p-2' alt="" />
            <img src={CLinet2} className='bg-white p-2' alt="" />
            <img src={CLinet3} className='bg-white p-2' alt="" />
            <img src={CLinet4} className='bg-white p-2' alt="" />
            <img src={CLinet5} className='bg-white p-2' alt="" />
        </div>
    );
};

export default Client;