'use client'
import React from 'react';
import NewProduct from './newproduct';


const AddProductsPage = () => {

  return (
    <div className="w-full h-full  bg-white rounded-md shadow-md ">
      <div className='flex flex-col w-full h-full'>
      <h1 className="px-6 py-2 md:text-3xl font font-semibold text-center text-sky-600">Add Your Trending Products </h1>
      <p className="px-6">Start by stocking your store with products your customers will love</p>
      <NewProduct />
      </div>
  
    </div>
  );
};

export default AddProductsPage;
