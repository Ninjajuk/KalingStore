
'use client'
import React, { useEffect, useState } from 'react';
import {getallProducts, } from '../../apiFunction'
import FilterCateogry from '../Product/components/FilterCategorySidebar';
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveFromCart, isItemInCart } from '../utility/cartUtils'
import Link from 'next/link';
const ProductList1 = () => {

  const [data, setData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();


useEffect(()=>{
async function getData() {
  try {
    const product = await getallProducts();
    setData(product);
    console.log(product)
        // Extract unique categories
        const categories = [...new Set(product.map(item => item.category))];
        setUniqueCategories(categories);
  } catch (error) {
    console.log('Error in fetching data:', error);
 
  }
}

getData();
},[])


const handleAddToCart = (product) => {
  addOrRemoveFromCart(dispatch, product, cartItems);
};
const filterProductsData=['All','Electronics','Vegetables','Meats']

  return (
    <FilterCateogry>
     <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-auto">
            {data.slice(0,32).map((product) => (
              <div
                key={product._id}
                className=" group relative px-2 py-2 shadow-md rounded-md flex flex-col justify-between"
              >
                <Link href={`/shop/${product.id}`}>
                  <div className="h-40 w-40 aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-48">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </Link>

                <div className="mt-4 flex flex-col">
                  <Link href={`/shop/${product.id}`}>
                    <p className="text-sm font-medium text-gray-900">
                      {product.title}
                    </p>
                  </Link>
                  <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
                    <span className="font-semibold text-lg">
                      ₹{product.price}
                    </span>
                    <span className="text-green-500">
                      {product.discountPercentage}% off
                    </span>
                  </p>
                </div>

                <div className="text-center py-3 mb-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full text-white bg-blue-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  >
                    <span className={`inline-block w-18 `}>
                      {isItemInCart(product._id, cartItems)
                        ? "Remove"
                        : "Add to Cart"}
                      {/* {isItemInCart(product.id,cartItems) ? "Remove" : "Add to Cart"} */}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
    </FilterCateogry>
  );
};



export default ProductList1;
