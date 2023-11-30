import React from 'react';

const CategoryCard = ({ title, description, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6 min-w-[300px] max-h-[300px] hover:scale-105 transition duration-700 ease-in-out">
    <div className='w-full h-2/3'>
          <img src={image} alt={title} className="mb-4 rounded-md w-full h-full object-cover" />
    </div>
  
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);



const ShopByCategory = () => {
  const categories = [
    {
      title: 'New Arrival',
      description: 'Explore the latest additions to our collection.',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    },
    {
      title: 'Electronics',
      description: 'Boost your productivity with these essentials.',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    },
    {
      title: 'Grocery',
      description: 'Create your ideal workspace with our curated selection.',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    },
    {
      title: 'Meat',
      description: 'Fresho Chicken',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40048898_5-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg?tr=w-640,q=80',
    //   image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    },
  ];

  return (
    <div className="container mx-auto  p-8 bg-gray-100 rounded-md">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 md:text-center  text-blue-800">Shop by Category</h1>

      <div className=" flex  overflow-x-auto lg:overflow-hidden overflow-hidden gap-4">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
