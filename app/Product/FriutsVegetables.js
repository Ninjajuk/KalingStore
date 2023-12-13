import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import React from 'react';
import CategoryCard from "./components/CardFruitsVeg";






const FruitsVegetables = () => {


  const weightOptions = [1, 2, 3, 5];

  return (
    <section className="w-full bg-gray-100">
      <div className="mx-auto max-w-2xl px-4  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

        <div className="flex justify-between ">
          <h1 className="text-xl lg:text-2xl font-bold py-4   text-blue-800">
           Vegetables
          </h1>
         
          <div className='flex items-center space-x-4'>
            <a href='' className="hover:underline text-slate-900 font-semibold text-lg">View All</a>
            <a href='' className="hover:rounded-full hover:bg-gray-400"><FaAngleLeft className="w-6 h-6"/></a>
            <a href='' className="hover:rounded-full hover:bg-gray-400"><FaAngleRight className="w-6 h-6"/></a>

          </div>
        </div>
        <p>Find fresh and organic vegetables for your meals.</p>


        <div>
          {/* {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))} */}
          <CategoryCard/>

        </div>
      </div>
    </section>
  );
};

export default FruitsVegetables;
