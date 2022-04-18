import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const handleSubmitBtn = (e) => {
        e.preventDefault();
        toast.success("Thanks for submit!!", {
            position: toast.POSITION.TOP_CENTER
        });
    }
    return (
        <div className='container w-75'>
            <form className=''>
                <div className="form-row mt-5">
                    <h3 className='mb-3 text-center'>Check Out this form</h3>
                    <div className="form-group  mb-3">

                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group">

                        <input type="number" className="form-control" id="inputPassword4" placeholder="Phone Number" />
                    </div>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputAddress2">Your dental health issues</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="E.g. General Dental Care, root canal, or dental implant etc." />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Block-D ,Mirpur-1 , Dhaka" />
                </div>
                <div className="form-row">

                    <div className="form-group col-md-4 mt-2">
                        <label htmlFor="inputState">Treatment</label>
                        <select id="inputState" className="form-control">
                            <option value='0'>Click to choose..</option>
                            <option value='1'>Oral Surgery</option>
                            <option value='2'>General Dental Care</option>
                            <option value='3'>Cosmetic Dentistry</option>
                            <option value='4'>Dental Crowns</option>
                        </select>
                    </div>
                </div>
                <div className="form- mt-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button onClick={handleSubmitBtn} type="submit" className="btn btn-secondary mt-2" >Submit</button>
                <ToastContainer />
            </form>
        </div>
    );
};

export default CheckOut;