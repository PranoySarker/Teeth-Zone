import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white' style={{ height: 'auto' }}>
            <div className='container pt-3'>
                <div className='row gx-2'>
                    <div className="col-6 ">
                        <h5>DENTAL HEALTHCARE</h5>
                        <p>Cosmetic Dentistry</p>
                        <p>Endodontics</p>
                        <p>Oral Surgery</p>
                        <p>General Dental Care</p>
                    </div>
                    <div className='col-6 '>
                        <h5>ADDRESS</h5>
                        <p>3674 Harrison Street</p>
                        <p>San Francisco, CA 94143, USA</p>
                        <p>Mon–Fri: 8:00 am to 8:00 pm Sat–Sun: 8:00 am to 4:00 pm</p>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Footer;