import React from 'react';

const CategoryCard = ({ title, description, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md  hover:scale-110 transition duration-700 ease-in-out">
    <div className='w-full h-[240px]'>
      <img src={image} alt={title} className="mb-4 rounded-md w-full h-full object-cover" />
    </div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Electronics = () => {
  const categories = [
    {
      title: 'SmartPhone',
      description: 'Explore the latest additions to our collection.',
      image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
    },
    {
      title: 'Accessories',
      description: 'Boost your productivity with these essentials.',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    },
    {
      title: 'Workspace',
      description: 'Create your ideal workspace with our curated selection.',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    },
  ];

  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-md">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-blue-800">
        Electronics
      </h1>
{/* 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 md:col-span-2">
          <CategoryCard {...categories[0]} />
        </div>
        <div className="col-span-1">
          <CategoryCard {...categories[1]} />
        </div>
        <div className="col-span-1">
          <CategoryCard {...categories[2]} />
        </div>
      </div> */}



      <div className="flex flex-col md:flex-row gap-4 w-full h-[600px]">
        <div className="w-1/2 h-full ">
          <div className=" bg-green-400 h-full rounded-md shadow-md">
          1
          </div>
        </div>
        <div className="flex flex-col w-1/2 h-full gap-4 ">
          <div className="col-span-2 bg-yellow-400  h-1/2 rounded-md shadow-md">2</div>
          <div className="col-span-2 bg-gray-400  h-1/2 rounded-md shadow-md">3</div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
