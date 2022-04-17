import React from 'react';
import { Button } from 'react-bootstrap';


const Consultation = () => {
    return (
        <div>
            <div className='anime mx-auto w-50 text-center mt-5 mb-3'>
                <h1>Call Now And Get Free Consultation</h1>
                <p className='mt-2'>Feel Free To Tell all your dental healthcare issues.</p>
                <h2 className='mt-2 text-success display-4 fw-bold'>+009009</h2>
                <div className="d-grid gap-2">
                    <Button variant="success" >
                        Request a callback
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Consultation;