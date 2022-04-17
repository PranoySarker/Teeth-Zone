import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-body'>
            <div className='banner-img'>
                <div className="typewriter">
                    <h2 className='text-uppercase'>your <span className='text-warning'> personal dentist</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;