
'use client'
import { useEffect, useState } from 'react';
import {getallProducts,editProduct,deleteProduct } from '../../../apiFunction'

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper."
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top."
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card."
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top."
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card."
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top."
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card."
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top."
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card."
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top."
  }
];


 function ProductList() {
  const [data,setData]=useState([])

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [uniqueCategories, setUniqueCategories] = useState([]);


  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (e) => {
    setSortBy(e.target.value);
  };
  useEffect(()=>{
    async function getData() {
      try {
        const product = await getallProducts();
        setData(product);

            // Extract unique categories
            const categories = [...new Set(product.map(item => item.category))];
            setUniqueCategories(categories);
      } catch (error) {
        console.log('Error in fetching data:', error);
     
      }
    }

    getData();
  },[data])

  // Filter products based on the selected category and search term
  const filteredProducts = data.filter((product) =>
    (sortBy ? product.category === sortBy : true) &&
    (searchTerm
      ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true)
  );



  
  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(productId);
      // After successful deletion, you may want to refresh the product list
      const updatedData = await getallProducts();
      setData(updatedData);
      console.log(`Product with ID ${productId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  return (
    <section className="w-full   h-full ">
      <div className="w-full flex-flex-col h-full">
        {/* Product Headline */}
        {/* <div className="lg:h-1/6  bg-white  flex flex-col">
          <h1 className="px-6 py-2 text-lg font font-semibold">
            Add your products
          </h1>
          <p className="px-6">
            Start by stocking your store with products your customers will love
          </p>
          <div className="flex px-6 py-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 hover:bg-gray-600 rounded-md cursor-pointer"
            >
              Add Products
            </button>
          </div>
          <div className="py-2 px-6 mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="block flex-1 border-2 hover:border-blue-500 bg-gray-100 rounded-md py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        </div> */}
              <div className="w-full lg:h-1/6 bg-white flex flex-col">
          <h1 className="px-6 py-1 md:text-3xl font font-semibold  text-sky-600">
          Add your products
          </h1>
          {/* <p className="px-6">Navigating Orders with Confidence</p> */}
          <div className="py-1 px-6 mx-auto flex flex-col md:flex-row items-center gap-1">
            <input
              type="text"
              placeholder="Search"
              className="block flex-1 border-2 hover:border-blue-500 bg-gray-100 rounded-md py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={searchTerm}
              onChange={handleFilter}
            />
            <div className="flex">
              {" "}
              <label className="ml-4">Filter By:</label>
              <select
                className="ml-2 border-2  rounded-md py-1.5 px-2  focus:ring-0 sm:text-sm sm:leading-6"
                value={sortBy}
                onChange={handleFilterSelect}
              >
                <option value="">Select Category</option>
                {uniqueCategories.map((option) => (
                  <option key={option} value={option} className='text-gray-600 py-2'>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex px-6 py-2 ">
            <button
              type="button"
              className="px-4 py-2 bg-green-600 hover:bg-green-800 hover:text-white rounded-md cursor-pointer"
            >
              Add Products
            </button>
          </div>
            
          </div>
        </div>
        {/* Product Headline */}

        {/* <h2 className="text-2xl font-semibold  bg-white px-6 py-2">
            Product List
          </h2> */}
        <div className="h-5/6  overflow-y-auto flex-grow">
          <div  className="max-h-full">
            <table className="min-w-full ">
              <thead className="sticky top-0">
                <tr>
                  <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product._id}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={product.thumbnail}
                            alt={product.title}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-gray-900">
                            {product.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">
                      ₹{product.price}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <img
                        className="h-16 w-16"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <button
                        className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                        // onClick={() => handleEditProduct(product.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="ml-4 text-red-600 hover:text-red-900 focus:outline-none"
                        onClick={() => handleDeleteProduct(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>
    </section>
  );
}

export default ProductList;