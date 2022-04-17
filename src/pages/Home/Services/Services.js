import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container mt-5'>
            <h2 className='mt-4 text-center mb-5 '>SERVICES FOR MY HAPPY CLIENT</h2>
            <div className='row gy-5'>

                {
                    services.map(service => <Service key={service._id}
                        service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;