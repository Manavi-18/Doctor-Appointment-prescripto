import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 cursor-pointer ">
          <p>
            Introducing <b>Prescripto</b> your trusted companion for seamless
            doctor appointment booking. With a user-friendly interface,
            Prescripto streamlines the process of finding and scheduling
            appointments with healthcare professionals. Whether you need a
            routine check-up or specialized medical attention, Prescripto
            connects you to the best doctors in your area, ensuring timely and
            efficient care. Say goodbye to long wait times and hello to
            hassle-free healthcare with Prescripto!
          </p>
          <p>
            With <b>Prescripto</b>, managing your health has never been easier.
            Our platform offers a comprehensive directory of doctors across
            various specialties, complete with profiles, ratings, and patient
            reviews. Book appointments at your convenience, receive reminders,
            and access your medical records securely—all in one place.
            Experience healthcare at your fingertips with Prescripto, where your
            well-being is our priority.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            At Prescripto, our vision is to revolutionize healthcare
            accessibility and convenience. We strive to bridge the gap between
            patients and healthcare providers by offering a reliable, efficient,
            and user-friendly platform. Our goal is to empower individuals to
            take charge of their health by providing seamless appointment
            booking, easy access to medical records, and trustworthy information
            on healthcare professionals. We envision a future where healthcare
            is not just a necessity but an experience that is accessible,
            personalized, and compassionate for everyone.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold"> CHOOSE US </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Prescripto streamlines doctor appointment bookings, saving you time and effort.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Book appointments effortlessly with Prescripto, anytime and anywhere.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Experience personalized healthcare solutions tailored to your needs with Prescripto.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
