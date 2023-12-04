

'use client'
import { useEffect, useState } from "react";
import Bunks from "./Slider";
import ShopByCategory from "../Product/ShopByCategory";
import FruitsVegetables from "../Product/FriutsVegetables";
import Electronics from "../Product/Electronics";
import Link from 'next/link';

import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '35',
      color: 'Black',
    },
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        color: 'Black',
      },
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        color: 'Black',
      },
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        color: 'Black',
      },
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        color: 'Black',
      },
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        color: 'Black',
      },
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        color: 'Black',
      },
      {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35',
        color: 'Black',
      },
    // More products...
  ]
  
  export default function ProductList() {

    const [data, setData] = useState([]);
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  const url = "https://dummyjson.com/products?limit=100";



// cart state is an array of items with unique IDs
const isItemInCart = (itemId, cartItems) => {
  return Array.isArray(cartItems) && cartItems.some(item => item.id === itemId);
};

function addtoCart(product) {
  const isAlreadyInCart = isItemInCart(product.id, cartItems);

  if (isAlreadyInCart) {
    dispatch(removeItem(product.id));
  } else {
    dispatch(addItem(product));
  }
}



  


  async function getProducts() {
    const products = await fetch(url);
    const data = await products.json();

    setData(data.products);
    console.log(data);
  }
  useEffect(() => {
    getProducts();
  }, []);



const filterProductsData=['All','Electronics','Vegetables','Meats']


    return (
      <div className="bg-white">
             <Bunks/>
             <ShopByCategory/>
             <Electronics/>
             <div className="py-4"></div>
             <FruitsVegetables/>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="overflow-x-auto bg-gray-400">
            <ul className="flex items-center justify-center">
              {filterProductsData.map((item)=>
              <li className=" px-4 py-2  hover:bg-gray-600 cursor-pointer rounded-md shadow-md">{item}</li>)}
            </ul>

          </div>
     
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {data.slice(0, 16).map((product) => (
    <div key={product.id} className="group relative px-2 py-2 shadow-md rounded-md">
      <Link href={`/shop/${product.id}`}>

          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
   
      </Link>

      <div className="mt-4 flex flex-col">
        <Link href={`/shop/${product.id}`}>
      
            <p className="text-sm font-medium text-gray-900">{product.title}</p>
    
        </Link>
        <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
          <span className="font-semibold text-lg">₹{product.price}</span>
          <span className="text-green-500">{product.discountPercentage}% off</span>
        </p>
      </div>

      <div className="text-center py-3 mb-3">
        <button
           onClick={() => addtoCart(product)}
          className={`w-full text-white bg-blue-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          <span className={`inline-block w-18 `}>
      
            {isItemInCart(product.id,cartItems) ? "Remove" : "Add to Cart"}
          </span>
        </button>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    )
  }
  