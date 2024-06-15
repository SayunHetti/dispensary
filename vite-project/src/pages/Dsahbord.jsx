import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function DashProfile() {
  const { currentUser, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <div className='flex flex-col mb-7 gap-4'>
        <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
          <img
            src={currentUser.profilePhoto || 'https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png'}
            alt='user'
            className='rounded-full w-full h-full object-cover border-8 border-lightgray'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-semibold'>First Name:</label>
          <input
            type='text'
            id='First_Name'
            placeholder='First Name'
            defaultValue={currentUser.First_Name}
            disabled
            className='border border-gray-300 p-2 rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-semibold'>Last Name:</label>
          <input
            type='text'
            id='Last_Name'
            placeholder='Last Name'
            defaultValue={currentUser.Last_Name}
            disabled
            className='border border-gray-300 p-2 rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-semibold'>Email:</label>
          <input
            type='email'
            id='email'
            placeholder='Email'
            defaultValue={currentUser.email}
            disabled
            className='border border-gray-300 p-2 rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label className='font-semibold'>Mobile Number:</label>
          <input
            type='tel'
            id='Mobile_Number'
            placeholder='Mobile Number'
            defaultValue={currentUser.Mobile_Number}
            disabled
            className='border border-gray-300 p-2 rounded-md'
          />
        </div>
      </div>

      {error && (
        <div className='mt-5 text-red-500'>
          <p>{error}</p>
        </div>
      )}

      <div className='flex justify-center mt-5'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={navigateToHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
