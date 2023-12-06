'use client'
import React, { useState } from "react";

import { orderData } from "./orderdata";
import { DeleteModal } from "@/app/Components/Modal/DeleteModal";
import { OrderModal } from "@/app/Components/Modal/orderModal";

const OrdersTable = () => {
  const [orders, setOrders] = useState(orderData);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderForEdit, setSelectedOrderForEdit] = useState(null);

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

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

  // const currentPage = 1; // Replace with your actual currentPage state
  // const itemsPerPage = 10; // Replace with your actual itemsPerPage value
  // const indexOfFirstItem = (currentPage - 1) * itemsPerPage;

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
            {sortedOrders.map((order, index) => (
              <tr
                key={order.id}
                className={
                  checkboxStates[index]
                    ? "bg-green-200 hover:bg-green-400 shadow-lg"
                    : index % 2 === 0
                    ? "bg-gray-100 hover:bg-gray-400 shadow-lg"
                    : "bg-purple-200 hover:bg-purple-400 shadow-lg"
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

export default OrdersTable;
