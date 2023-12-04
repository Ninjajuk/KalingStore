'use client'
import React, { useState } from "react";






const CustomerTable = () => {


  return (
    <>
        {/* <div className="max-h-full ">
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
                  <td className="border border-gray-300 p-2">
                    {order.customer}
                  </td>
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
                      onClick={() => handleDeleteAndConfirm(index)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

<section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div className="flex flex-col justify-center h-full">
        {/* <!-- Table --> */}
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Customers</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Spent</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Country</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"/></div>
                                        <div className="font-medium text-gray-800">Alex Shatov</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">alexshatov@gmail.com</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">$2,890.66</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">??</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach"/></div>
                                        <div className="font-medium text-gray-800">Philip Harbach</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">philip.h@gmail.com</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">$2,767.04</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">??</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk"/></div>
                                        <div className="font-medium text-gray-800">Mirko Fisuk</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">mirkofisuk@gmail.com</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">$2,996.00</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">??</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" width="40" height="40" alt="Olga Semklo"/></div>
                                        <div className="font-medium text-gray-800">Olga Semklo</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">olga.s@cool.design</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">$1,220.66</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">??</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long"/></div>
                                        <div className="font-medium text-gray-800">Burak Long</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left">longburak@gmail.com</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left font-medium text-green-500">$1,890.66</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-lg text-center">??</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>

 


    </>
  );
};

export default CustomerTable;
