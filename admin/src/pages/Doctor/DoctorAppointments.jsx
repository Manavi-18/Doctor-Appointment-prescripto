import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const DoctorAppointments = () => {
  const { dToken, appointments, getAppointments, cancelAppointment, completeAppointment } = useContext(DoctorContext);
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getAppointments();
    }
  }, [dToken]);

  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className='bg-white border rounded text-sm max-h-[80vh] overflow-y-scroll'>
        {/* Header Row */}
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>

        {/* Appointments List */}
        {appointments?.map((item, index) => (
          <div 
            className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-50' 
            key={item._id || index} // Ensure a unique key
          >
            <p className='max-sm:hidden'>{String(index + 1)}</p>

            {/* Patient Info */}
            <div className='flex items-center gap-2'>
              <img src={item.userData?.image || assets.default_user} className='w-8 rounded-full' alt="Patient" /> 
              <p>{item.userData?.name || "Unknown"}</p>
            </div>

            {/* Payment Method */}
            <div>
              <p className='text-xs inline border border-blue-500 px-2 rounded-full'>
                {item.payment ? 'Online' : 'CASH'}
              </p>
            </div>

            {/* Age Calculation */}
            <p className='max-sm:hidden'>
              {item.userData?.dob ? String(calculateAge(item.userData.dob)) : "N/A"}
            </p>

            {/* Date & Time */}
            <p>
              {item.slotDate ? slotDateFormat(item.slotDate) : "Invalid Date"}, {item.slotTime || "N/A"}
            </p>

            {/* Fees */}
            <p>{currency}{isNaN(Number(item.amount)) ? "0.00" : String(item.amount)}</p>

            {/* Action Buttons */}
            {item.cancelled ? (
              <p className='text-red-400 text-xs font-medium'>Cancelled</p>
            ) : item.isCompleted ? (
              <p className='text-green-500 text-xs font-medium'>Completed</p>
            ) : (
              <div className='flex'>
                <img 
                  onClick={() => cancelAppointment(item._id)} 
                  className='w-10 cursor-pointer' 
                  src={assets.cancel_icon} 
                  alt="Cancel" 
                />
                <img 
                  onClick={() => completeAppointment(item._id)} 
                  className='w-10 cursor-pointer' 
                  src={assets.tick_icon} 
                  alt="Complete" 
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;
