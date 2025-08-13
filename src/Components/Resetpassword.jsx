import React, { useState } from 'react'
import Leftside from './Leftside'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const Resetpassword = () => {
    const navigation = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setconfirmPassword] = useState(false);
    return (
        <div className="flex flex-col lg:flex-row min-h-screen md:bg-[#EAE9E9]">
            <Leftside />

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex justify-center items-center sm:px-0 md:px-10 lg:py-6">
                <div className="bg-white md:rounded-2xl px-6 py-6 text-black w-full max-w-sm md:shadow-md text-center">

                    {/* Top Icon */}
                    <div className="flex items-center justify-center mb-5">
                        <img
                            src={assets.Resetpassword}
                            alt="icon"
                            className="w-18 h-10 md:w-25 md:h-15 lg:w-28 lg:h-14 text-gray-400"
                        />
                    </div>

                    {/* Title & Description */}
                    <h1 className="text-2xl font-bold mb-7">Reset Password</h1>

                    {/* Form */}
                    <form className="flex flex-col gap-2 lg:gap-4">
                        <label className="text-left text-l lg:text-xl font-medium flex mt-5 items-center justify-between ">
                            <span className="flex items-center gap-2">
                                <i className="fa-solid fa-lock"></i>New Password
                            </span>
                            <i
                                className={`fa-solid ${showPassword ? ' fa-eye' : 'fa-eye-slash'} cursor-pointer text-sm `}
                                onClick={() => setShowPassword(!showPassword)}
                            ></i>
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="border-b w-full text-sm py-2 px-2 focus:outline-none required"
                            required
                        />
                        <label className="text-left text-l lg:text-xl font-medium flex mt-5 items-center justify-between ">
                            <span className="flex items-center gap-2">
                                <i className="fa-solid fa-lock"></i>Confirm Password
                            </span>
                            <i
                                className={`fa-solid ${confirmPassword ? ' fa-eye' : 'fa-eye-slash'} cursor-pointer text-sm`}
                                onClick={() => setconfirmPassword(!confirmPassword)}
                            ></i>
                        </label>
                        <input
                            type={confirmPassword ? 'text' : 'password'}
                            className="border-b w-full text-sm py-2 px-2 focus:outline-none required"
                            required
                        />


                        {/* Mobile Illustration */}
                        <div className="mt-8 flex items-center justify-center lg:hidden">
                            <img
                                src={assets.Resetmobile}
                                alt="Login Illustration"
                            />
                        </div>

                        {/* Submit Button */}

                        <button type="submit" className="bg-black text-white py-2 mt-8 rounded-full hover:bg-gray-800 transition cursor-pointer">
                            Submit
                        </button>
                        <button
                            type="button"
                            className="text-xs text-gray-500 hover:underline mt-5 lg:mt-10 cursor-pointer"
                            onClick={() => navigation("/signin")}
                        >
                            ❮ Back to Sign In

                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Resetpassword