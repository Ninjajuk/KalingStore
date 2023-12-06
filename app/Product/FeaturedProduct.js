import React from 'react';

const CategoryCard = ({ title, description, image, text,colorClass }) => {
    // Array of background colors for each card
    const cardColors = ['bg-blue-300', 'bg-green-300', 'bg-yellow-300', 'bg-pink-300', 'bg-purple-300'];
  
    // Randomly select a background color for each card
    // const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];

  
    return (
      <div className={`rounded-lg shadow-md mb-6 min-w-[14rem] h-[300px] hover:scale-105 transition duration-700 ease-in-out hover:ring-2 flex flex-col items-center justify-center ${colorClass}`}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 px-4">{description}</p>
        {/* Additional content */}
        {/* <p className="text-gray-700">{text}</p> */}
      </div>
    );
  };



const FeaturedProduct = () => {
  const categories = [
    {
      title: 'Vegetables',
      description: 'Find fresh and organic vegetables for your meals.',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
      colorClass: 'bg-[#4CAF50]',
      text:'Explore our wide selection of fresh and nutritious vegetables. From leafy greens to root vegetables, we have everything you need to create healthy and delicious meals.'
    },
    {
        title: 'Fruits',
        description: 'Discover a wide variety of juicy and delicious fruits.',
        image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
        colorClass: 'bg-[#FFC107] ',
        text:'Discover our juicy and flavorful fruits that are bursting with vitamins and antioxidants. Whether you are looking for a refreshing snack or a sweet addition to your recipes, we have a variety of fruits to satisfy your cravings.'
      },
    {
      title: 'Electronics',
      description: 'Boost your productivity with Cutting-Edge Electronics for Modern Living',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
      colorClass: 'bg-[#03A9F4]',
      text:'Explore our range of cutting-edge electronics designed to enhance your everyday life. From smart home devices to the latest gadgets, we have the technology you need to stay connected and entertained.'
    },
    {
      title: 'Grocery',
      description: 'Convenient and Essential Grocery Items',
      image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
      colorClass: 'bg-[#9E9E9E]',
      text:'Find all your essential grocery items in one place. From pantry staples to household necessities, we have a wide selection of products to make your shopping experience convenient and hassle-free.'
    },
    {
      title: 'Meat',
      description: 'High-Quality Meat for Every Occasion',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40048898_5-fresho-chicken-curry-cut-without-skin-antibiotic-residue-free.jpg?tr=w-640,q=80',
    //   image: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    colorClass: 'bg-red-500',
    text:'Choose from our selection of high-quality meat for all your cooking needs. From tender steaks to succulent roasts, our meat is sourced from trusted suppliers to ensure the best taste and quality.'
    },
  ];

  return (
    <div className="w-full  bg-gray-100 rounded-md px-4">
      <h1 className="text-2xl md:text-4xl font-bold py-4   text-blue-800">Featured Products</h1>
      <p>Check out these popular and recommended products from each category.</p>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4 ">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
