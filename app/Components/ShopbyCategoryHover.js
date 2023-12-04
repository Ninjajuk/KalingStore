// ShopHover.jsx
import React from "react";

const ShopHover = () => {

    const categories=[
        {title:'Electronics'},
        {title:'Grocery'},
        {title:'Vegetables'},
        {title:'Meat'},
    ]
  return (
    <div className="absolute left-0 top-full mt-2 bg-white p-2 rounded-md shadow-md">
      <p className="text-gray-800 font-semibold mb-2">Categories</p>
      <ul>
        {categories.map((category) => (
          <li key={category} className="text-gray-600 hover:text-red-600 py-2 px-2 rounded-md cursor-pointer">
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopHover;
