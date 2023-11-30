'use client'

import React, { useState } from 'react';
import TotalPriceSummary from './TotalPriceSummary';
import { MdDelete } from "react-icons/md";
const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
    country: '',
  });

  const [orderItems, setOrderItems] = useState([
    {
      id: 1,
      title: 'Product 1',
      price: 50,
      quantity: 2,
      imageUrl: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 75,
      quantity: 1,
      imageUrl: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDeleteItem = (itemId) => {
    setOrderItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Form submitted:', formData);
    console.log('Order items:', orderItems);
  };

  return (
    <div className="container mx-auto  ">
            <h2 className="text-2xl md:text-4xl font-bold my-4 px-4 md:text-center text-gray-600">Shipped to below Address</h2>
      <div className="flex flex-col md:flex-row gap-4 my-4 px-4">
        <div className="w-full md:w-2/3 p-4 bg-gray-100 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Contact information</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  required
                />
              </div>
            </div>
          </form>
        </div>

        <div className="w-full md:w-1/3 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          {orderItems.map((item) => (
            <div key={item.id} className="flex mb-4 px-4">
              <div className=" px-2">
                <img src={item.imageUrl} alt={item.title} className=" " />
              </div>
              <div className="w-3/4 px-2 flex flex-col justify-between">
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-gray-600">${item.price} each</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-around">
                <button
                  type="button"
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-500 hover:text-red-700 "
                >
                  <MdDelete/>
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                  className="border p-1 w-16"
                  min="1"
                />
              </div>
            </div>
          ))}
          <TotalPriceSummary/>
          <div className='py-4'>    <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 "
          >
            Confirm Order
          </button></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
