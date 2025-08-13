import React, { useState } from 'react';
import { assets } from '../assets/assets';
import Leftside from './Leftside';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;

    if (email === 'abc123@gmail.com') {
      setEmailError('Email already exist');
      valid = false;
    } else {
      setEmailError('');
    }

    if (username.length < 6) {
      setUsernameError('Username must be at least 6 characters');
      valid = false;
    } else {
      setUsernameError('');
    }

    if (password !== confirmPassword) {
      setPasswordError("Password doesn't match");
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen md:bg-[#EAE9E9]">
      <Leftside />

      {/* Signup Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center sm:px-0 md:px-10 lg:py-6">
        <div className="bg-white md:rounded-2xl px-6 py-10 text-black w-full max-w-sm md:shadow-md">
          <h1 className="text-4xl font-bold text-center">Welcome!</h1>
          <p className="text-3xl text-center mb-8">Sign Up</p>

          <form className="flex flex-col gap-7 lg:gap-4" onSubmit={validateForm}>
            {/* Email */}
            <div>
              <label className="text-l lg:text-xl font-medium flex items-center gap-2 mb-1">
                <i className="fa-solid fa-envelope"></i> Email
              </label>
              <input
                type="email"
                className={`border-b w-full text-sm py-2 px-2 focus:outline-none required ${emailError ? 'text-red-600 border-red-500' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red-600 text-xs mt-1">{emailError}</p>}
            </div>

            {/* Username */}
            <div>
              <label className="text-l lg:text-xl font-medium flex items-center gap-2 mb-1">
                <i className="fa-solid fa-user"></i> Username
              </label>
              <input
                type="text"
                className={`border-b w-full text-sm py-2 px-2 focus:outline-none required ${usernameError ? 'text-red-600 border-red-500' : ''}`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && <p className="text-red-600 text-xs mt-1">{usernameError}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="text-left text-l lg:text-xl font-medium flex items-center justify-between ">
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
                className="border-b w-full text-sm py-2 px-2 focus:outline-none required"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="lg:text-xs text-[10px]  text-gray-500 mt-1">
                Use 8+ chars, uppercase, lowercase, number & symbol
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-left text-l lg:text-xl font-medium flex items-center justify-between ">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-lock"></i> Confirm Password
                </span>
                <i
                  className={`fa-solid ${showConfirm ? 'fa-eye-slash' : 'fa-eye'} cursor-pointer text-sm`}
                  onClick={() => setShowConfirm(!showConfirm)}
                ></i>
              </label>
              <input
                type={showConfirm ? 'text' : 'password'}
                className={`border-b w-full text-sm py-2 px-2 focus:outline-none required${passwordError ? 'border-red-500' : ''}`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-600 text-xs mt-1">{passwordError}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-black text-white py-2 mt-5 rounded-full hover:bg-gray-800 transition cursor-pointer"
            >
              Sign Up
            </button>

            {/* Google Auth */}
            <button className="bg-gray-200 flex justify-center items-center gap-2 py-2 rounded-full hover:bg-gray-300 transition w-full">
              <img
                src="https://img.icons8.com/color/24/000000/google-logo.png"
                alt="Google"
              />
              <span className="text-sm font-medium">Continue with Google</span>
            </button>

            {/* Sign In Link */}
            <p className="text-xs text-center mt-4">
              Already have an account?{' '}
              <Link
                className="underline font-medium cursor-pointer"
                to="/signin"
                onClick={() => navigation('/signin')}
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
