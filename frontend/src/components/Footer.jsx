import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*------Left Section -----*/}
            <div>
              <img className='mb-5 w-40'src={assets.logo} alt="" />
              <p className='w-full md:w-2/3 text-gray-600 leading-6'>Welcome to prescripto, where your health and well-being are our top priorities. Our dedicated team provides compassionate and personalized care to patients of all ages. Schedule an appointment today and experience the exceptional care you deserve.Whether it's routine check-ups, specialized treatments, or preventive care, we are here to support you at every step of your healthcare journey. Our state-of-the-art facilities and advanced medical technologies ensure you receive the highest quality care. Join our community and take the first step towards a healthier, happier life today.</p>
            </div>
             {/*------Center Section -----*/}
             <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
                 {/*------Right Section -----*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-9247859699</li>
                    <li>presriptomain@gmail.com</li>

                </ul>
                </div>
        </div>
          {/*-----CopyRight----*/}
        <div>
          <hr />
          <p className='py-5 text-sm text-center'>CopyRight &copy; 2024-All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer;