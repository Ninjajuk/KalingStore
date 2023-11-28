import React from 'react';

const CategoryCard = ({ title, description, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-[300px] max-h-[300px] hover:scale-110 transition duration-700 ease-in-out">
    <div className='w-full h-2/3'>
          <img src={image} alt={title} className="mb-4 rounded-md w-full h-full object-cover" />
    </div>
  
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);



const FruitsVegetables = () => {
  const categories = [
    {
      title: 'Carrots',
      description: 'Explore the latest additions to our collection.',
      image: 'https://www.bigbasket.com/media/uploads/p/l/10000070_15-fresho-carrot-orange.jpg?tr=w-640,q=80',
    },
    {
      title: 'Capsicum',
      description: 'Boost your productivity with these essentials.',
      image: 'https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80',
    },
    {
      title: 'Tomato',
      description: 'Create your ideal workspace with our curated selection.',
      image: 'https://www.bigbasket.com/media/uploads/p/m/10000203_16-fresho-tomato-local.jpg?tr=w-3840,q=80',
    },
    {
      title: 'Potato',
      description: 'Fresho Chicken',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40048459_8-fresho-potato-new-crop.jpg?tr=w-640,q=80',
    //   image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    },
  ];

  return (
    <div className="container mx-auto  p-8 bg-gray-100 rounded-md">
      <h1 className="text-2xl md:text-4xl font-bold mb-8   text-blue-800">Fruits and Vegetables</h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  overflow-x-auto gap-2">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default FruitsVegetables;
