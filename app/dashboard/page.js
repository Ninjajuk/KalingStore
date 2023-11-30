'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

const Dashboard = () => {

    const router = useRouter()
  // Example order details
  const order = {
    products: [
      { id: 1, title: 'Product 1', price: 50, quantity: 2, imageUrl: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg' },
      { id: 2, title: 'Product 2', price: 75, quantity: 1, imageUrl: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg' },
    ],
    total: 175,
    deliveryAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'Cityville',
      state: 'Stateland',
      pincode: '12345',
      country: 'Countryland',
    },
  };
  const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="lg:text-3xl font-bold mb-4 text-green-600 lg:text-center">
        Dashboard </h2>
    </div>
  );
};

export default Dashboard;
