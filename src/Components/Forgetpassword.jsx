import React from 'react';
import Leftside from './Leftside';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Forgetpassword = () => {
  const navigation = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen md:bg-[#EAE9E9]">
      <Leftside />

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex justify-center items-center sm:px-0 md:px-10 lg:py-6">
        <div className="bg-white md:rounded-2xl px-6 py-8 text-black w-full max-w-sm md:shadow-md text-center">

          {/* Top Icon */}
          <div className="flex items-center justify-center mb-3">
            <img
              src={assets.Forgetpassword}
              alt="icon"
              className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 text-gray-400"
            />
          </div>

          {/* Title & Description */}
          <h1 className="text-2xl font-bold mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-500 mb-6">
            Enter your <strong>Email</strong> to reset your password.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-3 lg:gap-4">
            <label className="text-left text-l lg:text-xl font-medium flex items-center gap-2">
              <i className="fa-solid fa-envelope"></i> Email
            </label>
            <input
              type="email"
              className="border-b w-full text-sm py-2 px-2 focus:outline-none required"
              required
            />

            {/* Mobile Illustration */}
            <div className="mt-8 flex items-center justify-center lg:hidden">
              <img
                src={assets.Forgetmobile}
                alt="Login Illustration"
                className="w-fit h-auto"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white py-2 mt-8 rounded-full hover:bg-gray-800 transition cursor-pointer"
             onClick={()=>navigation('/resetpassword')}
            >
              Submit
            </button>

            {/* Back to Sign In */}
            <button
              type="button"
              className="text-xs text-gray-500 hover:underline mt-5 lg:mt-10 cursor-pointer"
              onClick={() => navigation('/signin')}
            >
              ❮ Back to Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgetpassword;
