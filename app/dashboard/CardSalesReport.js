'use client'
import React from 'react';

const cardSales = [
    { title: 'Total Earnings', price: '₹124500', path: '' },
    { title: 'Total Sales', price: '147', path: '' },
    { title: 'Total Orders', price: '85', path: '' },
  ];
  

const CardSalesReport = () => {
  const awesomeBackgroundColors = ['bg-blue-300', 'bg-green-300', 'bg-yellow-300'];
  const awesomeBackgroundColorsHover = ['bg-blue-400', 'bg-green-400', 'bg-yellow-400'];

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-2">
      {cardSales.map((item, index) => (
        <div
          key={index}
          className={`bg-white p-4 rounded-md shadow ${
            awesomeBackgroundColors[index % awesomeBackgroundColors.length]
          } hover:${
            awesomeBackgroundColorsHover[index % awesomeBackgroundColorsHover.length]
          } transform hover:scale-105 hover:shadow-xl transition-transform duration-300`}
        >
          <h2 className="text-l font-semibold pb-4">{item.title}</h2>
          <p className="text-black-500 text-center font-medium text-xl">
            {item.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardSalesReport;
