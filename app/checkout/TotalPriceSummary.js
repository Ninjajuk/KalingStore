'use client'
import React, { useState } from 'react';
import { useSelector,  } from "react-redux";
const TotalPriceSummary = () => {

  const cartItems = useSelector((state) => state.cart);
//   const calculateSubtotal = () => {
//     return orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   };

//   const calculateTotal = () => {
//     const subtotal = calculateSubtotal();
//     const shipping = 15;
//     const taxes = 0.08 * subtotal; // Assuming 8% tax rate
//     return subtotal + shipping + taxes;
//   };

  return (

        <div className="border-t pt-4 mt-4">
          {cartItems.map((item)=>
          <>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${item.price}</span>
            {/* <span>${calculateSubtotal().toFixed(2)}</span> */}
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>$50.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Taxes</span>
            <span>$50</span>
            {/* <span>${(0.08 * calculateSubtotal()).toFixed(2)}</span> */}
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$1100</span>
            {/* <span>${calculateTotal().toFixed(2)}</span> */}
          </div>
          </>
          )}
        </div>

  );
};

export default TotalPriceSummary;
