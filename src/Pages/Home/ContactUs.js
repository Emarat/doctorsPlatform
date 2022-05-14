import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section className='my-28' style={{
            background: `url(${appointment})`
        }}>
            <div className='py-5'>
                <div className='text-center mb-3'>
                    <h4 className="text-primary font-bold text-xl">Contact Us</h4>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                </div>
                <div className='grid grid-flow-row auto-rows-max gap-3 justify-center'>
                    <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs" />

                    <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs" />

                    <input type="text" placeholder="Your message" className="input input-bordered input-lg w-full max-w-xs" />

                </div>
                <div className='text-center m-3'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;