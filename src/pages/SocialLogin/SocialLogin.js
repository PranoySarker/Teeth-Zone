import React from 'react';
import { Button } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center mt-3'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-3 px-3'>Or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <div className="d-grid gap-2">
                    <Button variant="outline-secondary" className='border border-secondary rounded'>
                        <h5 className='fw-bold '>Google</h5>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;