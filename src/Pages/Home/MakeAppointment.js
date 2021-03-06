import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary font-bold '>Appointment</h3>
                <h2 className='text-3xl text-white'>Make An Appointment Today</h2>
                <p className='text-white py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit adipisci minus animi nostrum quibusdam quam commodi quis minima reiciendis ea suscipit culpa, eligendi tempore consequatur mollitia ex laborum eaque maiores aperiam recusandae quae soluta voluptas modi iusto. Excepturi, tenetur enim?</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;