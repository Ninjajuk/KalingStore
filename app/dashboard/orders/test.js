'use client'
import React, { useState } from 'react';
import OrdersTable from './OrderTable';
import Pagination from '@/app/Components/Pagination';
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
const OrdersTable = ({searchTerm,sortBy,currentPage,itemsPerPage}) => {
    const [orders, setOrders] = useState(orderData);
    const [isEditModalOpen, setisEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [selectedOrderForEdit, setSelectedOrderForEdit] = useState(null);
    // const [currentPage, setCurrentPage] = useState(1);
  
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [hoveredRow, setHoveredRow] = useState(null);
    const [checkboxStates, setCheckboxStates] = useState({});
  
    // Sorting state
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState("asc");
  
    // Function to toggle sorting direction
    const toggleSortDirection = () => {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    };
  
    // Sort orders based on the selected field and direction
    const sortedOrders = [...orders].sort((a, b) => {
      const fieldA = a[sortField];
      const fieldB = b[sortField];
  
      if (sortDirection === "asc") {
        return fieldA < fieldB ? -1 : 1;
      } else {
        return fieldA > fieldB ? -1 : 1;
      }
    });
  
  
   
  
  
  
    const currentOrders = paginate(sortedOrders, currentPage, itemsPerPage);
  
  
  
    
    // // Use handlePageChange to update the current page
    // const handlePageChange = (pageNumber) => {
    //   setCurrentPage(pageNumber);
    // };
    
  
    const handleEditClick = (order) => {
      setisEditModalOpen(true);
      setSelectedOrderForEdit(order);
    };
  
    const handleModalClose = () => {
      setSelectedOrder(null);
      setisEditModalOpen(false);
    };
    const onSubmit = (editedOrder) => {
      // Your logic for submitting changes
      console.log("Changes submitted:", editedOrder);
  
      // Close the modal
      setisEditModalOpen(false);
      setSelectedOrderForEdit(null);
    };
  
    const handleMouseEnter = (index) => {
      setHoveredRow(index);
    };
    const handleMouseLeave = () => {
      setHoveredRow(null);
    };
  
    // Function to handle DeleteModal Changes
    const handleDelete = (index) => {
      setIsModalOpened(true); // Indicate that modal is about to open
      setIsDeleteModalOpen(true);
          // Pass the index of the hovered row to handleDelete
          setHoveredRow(index);
    };
  
    const handleCheckboxChange = (index) => {
      setCheckboxStates((prevState) => {
        return { ...prevState, [index]: !prevState[index] };
      });
    };
  
  
  
    const handleConfirmDelete = () => {
      if (isModalOpened && hoveredRow !== null) {
        setIsModalOpened(false);
    
        // Use filter to create a new array excluding the element at hoveredRow
        const updatedOrders = orders.filter((_, index) => index !== hoveredRow);
        
        console.log("Updated orders after deletion:", updatedOrders);
        setOrders(updatedOrders);
        setIsDeleteModalOpen(false);
      }
    };
    
  
    const handleDeleteAndConfirm = async () => {
      if (hoveredRow !== null) {
        await handleDelete(hoveredRow); // Wait for handleDelete to complete
        handleConfirmDelete();
      }
    };
    
  
    const handleCancelDelete = (index) => {
      setIsDeleteModalOpen(false);
    };
    return (
      <>
        <div className="max-h-full ">
          <table className="w-full border-collapse border border-gray-300">
            <thead className=" bg-black text-white sticky top-0 z-10">
              <tr className="">
                <th className="border border-gray-300 p-2 text-left">
                  <input type="checkbox" />
                </th>
                <th
                  className=" p-2 cursor-pointer text-left"
                  onClick={() => {
                    setSortField("orderNumber");
                    toggleSortDirection();
                  }}
                >
                  ORDER
                  {sortField === "orderNumber" && (
                    <span
                      className={`ml-2 ${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    >
                      &#8593;
                    </span>
                  )}
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer text-left"
                  onClick={() => {
                    setSortField("total");
                    toggleSortDirection();
                  }}
                >
                  TOTAL
                  {sortField === "total" && (
                    <span
                      className={`ml-2 ${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    >
                      &#8593;
                    </span>
                  )}
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer text-left"
                  onClick={() => {
                    setSortField("customer");
                    toggleSortDirection();
                  }}
                >
                  CUSTOMER
                  {sortField === "customer" && (
                    <span
                      className={`ml-2 ${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    >
                      &#8593;
                    </span>
                  )}
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  PAYMENT STATUS
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  FULFILMENT STATUS
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  DELIVERY TYPE
                </th>
                <th
                  className="border border-gray-300 p-2 cursor-pointer text-left"
                  onClick={() => {
                    setSortField("date");
                    toggleSortDirection();
                  }}
                >
                  DATE
                  {sortField === "date" && (
                    <span
                      className={`ml-2 ${
                        sortDirection === "asc" ? "rotate-180" : ""
                      }`}
                    >
                      &#8593;
                    </span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody className="-z-10">
              {currentOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className={
                    checkboxStates[index]
                      ? "bg-green-200 hover:bg-green-400 shadow-lg"
                      : index % 2 === 0
                      ? "bg-gray-100 hover:bg-gray-400 shadow-lg"
                      : "bg-sky-100 hover:bg-gray-400 shadow-lg"
                  }
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  style={{ position: "relative", cursor: "pointer" }}
                >
                  <td
                    className={`border border-gray-300 p-2 'bg-green-500 text-white' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={checkboxStates[index]}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    {order.orderNumber}
                  </td>
                  <td className="border border-gray-300 p-2">${order.total}</td>
                  <td className="border border-gray-300 p-2">{order.customer}</td>
                  <td className="border border-gray-300 p-2">
                    {order.paymentStatus}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {order.fulfilmentStatus}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {order.deliveryType}
                  </td>
                  <td className="border border-gray-300 p-2">{order.date}</td>
                  <td
                    className={` p-2 absolute right-0 top-0 ${
                      hoveredRow === index ? "block" : "hidden"
                    }`}
                  >
                    <button
                      onClick={() => handleEditClick(order)}
                      className="mr-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded "
                    >
                      Edit
                    </button>
                    <button
                    type="button"
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {isEditModalOpen && (
          <OrderModal
            order={selectedOrderForEdit}
            onSubmit={onSubmit}
            closeModal={() => {
              setisEditModalOpen(false);
              setSelectedOrderForEdit(null);
            }}
          />
        )}
  
        {isDeleteModalOpen && (
          <DeleteModal
            closeModal={handleCancelDelete}
            onDelete={handleDeleteAndConfirm}
          />
        )}
      </>
    );
  };

const OrdersPage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(''); // 'name', 'price', etc.
  const [currentPage, setCurrentPage] = useState(1); // Add currentPage state
  const itemsPerPage = 10;
  const filterOptions = ['name', 'price']; // Add more filter options as needed

  const handleFilter = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (e) => {
    setSortBy(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <section className="w-full   h-full ">
    <div className="w-full flex-flex-col h-full">

     {/* Product Headline */}
        <div className="w-full h-1/6 bg-white flex flex-col">
          <h1 className="px-6 py-1 md:text-3xl font font-semibold  text-sky-600">Order Management</h1>
          {/* <p className="px-6">Navigating Orders with Confidence</p> */}
          <div className="py-1 px-6 mx-auto flex flex-col md:flex-row items-center">
            <input
              type="text"
              placeholder="Search"
              className="block flex-1 border-2 hover:border-blue-500 bg-gray-100 rounded-md py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              value={searchTerm}
              onChange={handleFilter}
            />
            <label className="ml-4">Filter By:</label>
            <select
              className="ml-2 border-2 bg-gray-100 rounded-md py-1.5 px-2 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
              value={sortBy}
              onChange={handleFilterSelect}
            >
              <option value="">Select...</option>
              {filterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Product Headline */}


      <div className="h-4/6 flex-grow overflow-y-auto ">
        <div  className="h-full">
          {/* <table className="min-w-full ">
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={product.imageSrc}
                          alt={product.imageAlt}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <div className="text-sm leading-5 text-gray-900">
                      {product.price}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <img
                      className="h-16 w-16"
                      src={product.imageSrc}
                      alt={product.imageAlt}
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
                      // onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <OrdersTable searchTerm={searchTerm} sortBy={sortBy} currentPage={currentPage} itemsPerPage={itemsPerPage}/>
        </div>
      </div>
      <div className='h-1/6'><Pagination currentPage={currentPage} totalPages={Math.ceil(products.length / itemsPerPage)} onPageChange={handlePageChange}/></div>
  


    </div>
  </section>
  );
};

export default OrdersPage;
