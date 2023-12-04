import React from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline'
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
  {
    id: 3,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 4,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // Add more products as needed...
];

const CartComponent = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-2/3 grid grid-cols-1 rounded-lg shadow-lg">
          {/* Cart Items */}
          {products.map((product) => (
            <div key={product.id} className="col-span-7 md:col-span-5 border-t-2 border-gray-300">
              <div className="flex items-center mb-4 px-4 py-2">
                <div className="w-[12rem] h-[12rem] rounded-lg px-4 py-4">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="flex-grow ml-4 flex justify-between">
                  <div>
                    <span className='text-base font-medium text-gray-900'>{product.name}</span>
                    <span className="block text-gray-500">{product.color}</span>
                    <span className="block text-gray-700 mt-2 font-bold">{product.price}</span>
                  </div>
                  <div className="w-1/ ml-4">
                    <label htmlFor={`quantity-${product.id}`} className="sr-only">
                      Quantity
                    </label>
                    <select
                      id={`quantity-${product.id}`}
                      name={`quantity-${product.id}`}
                      className="rounded-md border border-gray-300 p-1"
                      defaultValue={product.quantity}
                    >
                      {[1, 2, 3, 4, 5].map((quantity) => (
                        <option key={quantity} value={quantity}>
                          {quantity}
                        </option>
                      ))}
                    </select>
                  </div>
                  <XMarkIcon className="h-6 w-6 ml-auto" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3 col-span-7 md:col-span-2 ">
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>{calculateSubtotal(products)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>$10.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <span className="font-bold">Total:</span>
              <span className="font-bold">{calculateTotal(products)}</span>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to calculate subtotal
const calculateSubtotal = (products) => {
  const subtotal = products.reduce((acc, product) => {
    return acc + parseFloat(product.price.replace('$', '')) * product.quantity;
  }, 0);
  return `$${subtotal.toFixed(2)}`;
};

// Helper function to calculate total (subtotal + shipping)
const calculateTotal = (products) => {
  const subtotal = calculateSubtotal(products);
  const shipping = 10.0; // Assuming a fixed shipping cost
  const total = parseFloat(subtotal.replace('$', '')) + shipping;
  return `$${total.toFixed(2)}`;
};

export default CartComponent;
