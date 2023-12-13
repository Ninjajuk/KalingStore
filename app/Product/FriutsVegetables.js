import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import React from 'react';
import CategoryCard from "./components/CardFruitsVeg";


// const CategoryCard = ({
//   title,
//   description,
//   thumbnail,
//   price,
//   TotalPrice,
//   handleAddToCart
// }) => {
//   const weightOptions = [1, 2, 3, 5]; // You can modify the weight options as needed


  return (
    <div className="group relative px-2 py-2 shadow-md rounded-md">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
        <img
          src={thumbnail}
          alt={title}
          className=" rounded-md w-full h-full object-cover"
        />
      </div>

      <div>
        <p className="text-md text-slate-800 font-semibold ">Fresh</p>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="py-2">
          {/* <label htmlFor={`${title}-weight`} className="text-gray-700">
            Select Weight:
          </label> */}
          <select
            id={`${title}-weight`}
            className="block w-full p-2 border border-gray-300 rounded-md mt-1"
          >
            {weightOptions.map((weight, index) => (
              <option key={index} value={weight}>
                {weight} kg
              </option>
            ))}
          </select>
        </div>
        <p className="text-gray-700 flex items-center">
          <span className="text-lg font-bold">₹{price}<sub className="text-xs text-gray-500">/kg</sub></span>
          <span className="ml-2 line-through">₹{TotalPrice}</span>
        </p>
      </div>

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-4 min-w-[14rem] flex flex-col ">
//       <div className="w-full h-2/3">
//         <img
//           src={thumbnail}
//           alt={title}
//           className=" rounded-md w-full h-full object-cover"
//         />
//       </div>

//       <div>
//         <p className="text-md text-slate-800 font-semibold ">Fresh</p>
//         <h2 className="text-xl font-semibold mb-2">{title}</h2>
//         <div className="py-2">
//           {/* <label htmlFor={`${title}-weight`} className="text-gray-700">
//             Select Weight:
//           </label> */}
//           <select
//             id={`${title}-weight`}
//             className="block w-full p-2 border border-gray-300 rounded-md mt-1"
//           >
//             {weightOptions.map((weight, index) => (
//               <option key={index} value={weight}>
//                 {weight} kg
//               </option>
//             ))}
//           </select>
//         </div>
//         <p className="text-gray-700 flex items-center">
//           <span className="text-lg font-bold">₹{price}<sub>/kg</sub></span>
//           <span className="ml-2 line-through">₹{TotalPrice}</span>
//         </p>
//       </div>


//       <div className="w-full flex items-center justify-center ring-1 rounded-md ring-red-500 my-2 hover:bg-red-500 hover:text-white cursor-pointer">
//         <button onClick={()=>handleAddToCart({  title,
//   description,
//   thumbnail,
//   SellingPrice,
//   TotalPrice,})} type="button" className="px-4 py-2 ">
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };



const FruitsVegetables = () => {


  const categories = [
    {
      title: 'Carrots',
      description: 'Explore the latest additions to our collection.',
      thumbnail: 'https://www.bigbasket.com/media/uploads/p/l/10000070_15-fresho-carrot-orange.jpg?tr=w-640,q=80',
      price:25,
      TotalPrice:35
    },
    {
      title: 'Capsicum',
      description: 'Boost your productivity with these essentials.',
      thumbnail: 'https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80',
      price:36,
      TotalPrice:50
    },
    {
      title: 'Tomato',
      description: 'Create your ideal workspace with our curated selection.',
      thumbnail: 'https://www.bigbasket.com/media/uploads/p/m/10000203_16-fresho-tomato-local.jpg?tr=w-3840,q=80',
      price:45,
      TotalPrice:70
    },
    {
      title: 'Potato',
      description: 'Fresho Potato',
      thumbnail: 'https://www.bigbasket.com/media/uploads/p/l/40048459_8-fresho-potato-new-crop.jpg?tr=w-640,q=80',
      price:15,
      TotalPrice:35
    //   image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    },
  ];
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


        <div className=" w-full">
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
          </div>
     

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
