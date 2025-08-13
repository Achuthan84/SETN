import React from 'react';
import { assets } from '../assets/assets';

const Leftside = () => {
    return (
        <div className="hidden lg:flex w-1/2 flex-col justify-between">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold ml-8">SETN</h1>
                <img src={assets.VoliteTriangle} alt="Top Triangle" className="w-[130px]" />
            </div>

            <div className="flex justify-center items-center flex-grow">
                <img src={assets.Cartoon} alt="Cartoon" className="w-[300px] md:w-[400px]" />
            </div>

            <div>
                <img src={assets.GreenTriangle} alt="Bottom Triangle" className="w-[130px] ml-4" />
            </div>
        </div>
  )
}

export default Leftside