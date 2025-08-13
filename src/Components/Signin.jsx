import React, { useState } from 'react';
import Leftside from './Leftside';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigation = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen md:bg-[#EAE9E9]">
            <Leftside />

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex justify-center items-center sm:px-0 md:px-10 lg:py-6">
                <div className="bg-white md:rounded-2xl px-6 py-10 text-black w-full max-w-sm md:shadow-md">
                    <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>

                    <form className="flex flex-col gap-5">
                        {/* Email */}
                        <div>
                            <label className="text-l lg:text-xl font-medium flex items-center gap-2 mb-1">
                                <i className="fa-solid fa-envelope"></i> Email
                            </label>
                            <input
                                type="email"
                                className="border-b w-full text-sm py-2 px-2 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-l lg:text-xl  font-medium flex items-center justify-between mb-1">
                                <span className="flex items-center gap-2">
                                    <i className="fa-solid fa-lock"></i> Password
                                </span>
                                <i
                                    className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} cursor-pointer text-sm`}
                                    onClick={() => setShowPassword(!showPassword)}
                                ></i>
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="border-b w-full text-sm py-2 px-2 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Forget Password */}
                        <div className="text-right">
                            <Link
                                to="/forgetpassword"
                                onClick={() => navigation('/forgetpassword')}
                                className="text-sm text-gray-600 hover:underline"
                            >
                                Forget Password?
                            </Link>
                        </div>

                        {/* Mobile Illustration */}
                        <div className="mt-8 flex items-center justify-center lg:hidden">
                            <img
                                src={assets.Signin_pic}
                                alt="Login Illustration"
                                className="w-fit h-auto"
                            />
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="bg-black text-white py-2 mt-8 rounded-full hover:bg-gray-800 transition cursor-pointer"
                        >
                            Sign In
                        </button>

                        {/* Signup Link */}
                        <p className="text-xs text-center mt-4">
                            Don't have an account?{' '}
                            <Link
                                to="/"
                                onClick={() => navigation('/')}
                                className="underline font-medium cursor-pointer"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
