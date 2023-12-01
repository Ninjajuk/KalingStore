'use client'
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const UpgradeToProCard = () => {
  return (
    <div className='w-full h-full bg-green-700 rounded-md shadow-md px-4 py-4 hover:scale-105 hover:shadow-xl transition-transform duration-300'>
      <h3 className="text-lg text-white font-semibold mb-2">
        Upgrade to Pro
      </h3>
      <p className="text-lg text-white">
        ₹300<sub>/Month</sub>
      </p>
      <p className="text-white">₹3600 Anually</p>
      <div className="pt-4">
        <button className="flex items-center justify-center bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 rounded">
          <span>
            <FaRegHeart />
          </span>
          <span className="px-2">Upgrade Now</span>
        </button>
      </div>
    </div>
  );
};

export default UpgradeToProCard;
