/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

'use client'
import { useEffect, useState } from "react";
import Bunks from "./Slider";
import ShopByCategory from "../Product/ShopByCategory";
import FruitsVegetables from "../Product/FriutsVegetables";
import Electronics from "../Product/Electronics";


// import { useDispatch, useSelector } from "react-redux";
// import { addItem, removeItem } from "../Redux/cartSlicer";

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
  const url = "https://dummyjson.com/products?limit=100";


//   const cartItems = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   function addtoCart(item) {
//     if (isItemInCart(item.id)) {
//       dispatch(removeItem(item.id));
//     } else {
//       dispatch(addItem(item));
//     }
//   }
//   function isItemInCart(itemId) {
//     return cartItems.some((item) => item.id === itemId);
//   }

//   const [page, setPage] = useState(1);
//   const selectPageHandler = (selectedPage) => {
//     if (
//       selectedPage >= 1 &&
//       selectedPage <= data.length / 10 &&
//       selectedPage !== page
//     ) {
//       setPage(selectedPage);
//     }
//   };

  async function getProducts() {
    const products = await fetch(url);
    const data = await products.json();

    setData(data.products);
    console.log(data);
  }
  useEffect(() => {
    getProducts();
  }, []);


//   const discountPrice = (price, discountPercentage) => {
//     return price - (price * discountPercentage) / 100;
//   };
//   const calculateDiscountPriceProducts = (data) => {
//     return data.map((pro) => {
//       const discoPrice = discountPrice(pro.price, pro.discountPercentage);
//       const yousave = totalsave(pro.price, discoPrice);
//       return {
//         id: pro.id,
//         title: pro.title,
//         price: pro.price,
//         discountprice: Math.round(discoPrice),
//         yousave: Math.round(yousave)
//       };
//     });
//   };
//   const discountedPrice = calculateDiscountPriceProducts(data);

    return (
      <div className="bg-white">
             <Bunks/>
             <ShopByCategory/>
             <Electronics/>
             <FruitsVegetables/>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
     
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {data.map((product) => (
              <div key={product.id} className="group relative  px-2 py-2 shadow-md rounded-md">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex flex-col">
                  {/* <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div> */}
                  <p className="text-sm font-medium text-gray-900">{product.title}</p>
                  <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
                    <span className="font-semibold text-lg">₹{product.price}</span>
                    {/* <span className="line-through">₹{product.price}</span> */}
                    <span className="text-green-500">{product.discountPercentage}% off</span>
                  </p>
                </div>

                <div className="text-center py-3 mb-3 ">
                <button
                //   onClick={() => addtoCart(item)}
                  className="w-full py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <span className="inline-block w-18">
                  Add to Cart
                    {/* {isItemInCart(item.id) ? "Remove" : "Add to Cart"} */}
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
  