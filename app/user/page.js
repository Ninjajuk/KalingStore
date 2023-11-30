'use client'
import { useState, useEffect } from "react";

import { FaPlus } from "react-icons/fa";
import { AddnewAddressForm } from "./AddAddressForm";
import PersonalInfoCard from "./ProfileCard";
import NavbarUser from "./navbarUser";


 const Address = () => {
  const [isactive, setIsActive] = useState(false);
//   const [showButtonsIndex, setShowButtonsIndex] = useState(-1);
//   const [user, setUsers] = useState();
//   const [addresses, setAddresses] = useState([]); // State to store fetched addresses

//   const handleMouseEnter = (index) => {
//     setShowButtonsIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setShowButtonsIndex(-1);
//   };

  // Address component
  const handleCancel = () => {
    console.log("Cancel button clicked");
    setIsActive(false);
    console.log(isactive);
  };
  // const addresses = [
  //   {
  //     name: "Md Moin Uddin Ansari",
  //     phone: "7079964034",
  //     address: "10, Near Imambara Bheraukhra, Masjid Road,",
  //     district: "Vaishali District, Bihar - 844112"
  //   },
  //   {
  //     name: "Md Moin Uddin Ansari",
  //     phone: "7079964034",
  //     address: "10, Near Imambara Bheraukhra, Masjid Road,",
  //     district: "Vaishali District, Bihar - 844112"
  //   },
  //   {
  //     name: "Md Moin Uddin Ansari",
  //     phone: "7079964034",
  //     address: "10, Near Imambara Bheraukhra, Masjid Road,",
  //     district: "Vaishali District, Bihar - 844112"
  //   }
  //   // Add more addresses here...
  // ];

  // Fetch addresses when the component mounts
//   useEffect(() => {
//     async function fetchAddresses() {
//       try {
//         const response = await fetch("http://localhost:3000/address");
//         if (response.ok) {
//           const data = await response.json();
//           setAddresses(data);
//         } else {
//           console.error("Failed to fetch addresses:", response.status);
//         }
//       } catch (error) {
//         console.error("Error fetching addresses:", error);
//       }
//     }

//     fetchAddresses();
//   }, [addresses]);

//   function updateAddress(addressId) {
//     const updatedData = {
//       // Populate this object with the updated address data
//       name: "Updated Name",
//       email: "updated@example.com"
//       // Add other fields here
//     };

//     fetch(`/api/address/${addressId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(updatedData)
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           // Address updated successfully
//           // You can update your UI or take any other actions as needed
//         } else if (response.status === 404) {
//           // Address not found, handle this case
//         } else {
//           // Handle other error cases
//         }
//       })
//       .catch((error) => {
//         console.error("Error updating address:", error);
//       });
//   }

//   function deleteAddress(addressId) {
//     fetch(`/api/address/${addressId}`, {
//       method: "DELETE"
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           // Address deleted successfully
//           // You can update your UI or take any other actions as needed
//         } else if (response.status === 404) {
//           // Address not found, handle this case
//         } else {
//           // Handle other error cases
//         }
//       })
//       .catch((error) => {
//         console.error("Error deleting address:", error);
//       });
//   }

  return (
    <>
      <section className="w-full   bg-yellow-400">
        <div className="w-full    mx-auto px-8 py-4">
        
          <div className="flex flex-col md:flex-row gap-4 py-4 w-full  min-h-screen ">
          <div className="md:w-1/5 bg-gray-200 rounded-md shadow-md px-4 py-4">
          <NavbarUser/>
          </div>
            {/* <div className="md:w-4/5 py-4 first:pt-0 last:pb-0 cursor-pointer items-center bg-white rounded-md shadow-md p-4 md:items-start">
              <button
                onClick={() => setIsActive(!isactive)}
                className="flex items-center "
              >
                <span className="bg-blue-500 text-white p-2 rounded-full">
                  {" "}
                  <FaPlus />
                </span>
                <span className="px-2"> ADD A NEW ADDRESS</span>
              </button>
              {isactive && (
                <AddnewAddressForm
                  handleCancel={handleCancel}
                //   setAddresses={setAddresses}
                />
              )}
            </div> */}
            <div className="md:w-4/5 mx-auto py-4   bg-white rounded-md shadow-md p-4 ">
                <PersonalInfoCard/>
            </div>
            
            {/* saved Address starts here */}
{/* 
            {addresses.map((address, index) => (
              <div
                key={index}
                className="sm:w-full h-[60px]  py-4 first:pt-0 last:pb-0 cursor-pointer items-center bg-white rounded-md shadow-md p-4 md:items-start relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className=" py-2 px-2   ">
                  <h2 className="text-xl font-semibold mb-1">{address.name}</h2>
                  <h2 className="text-xl font-semibold mb-1">
                    {address.phone}
                  </h2>
                  <p>{address.fullAddress}</p>
                  <p>{address.postalCode}</p>
                </div>
                {showButtonsIndex === index && (
                  <div className="absolute top-0 right-0 p-2 space-x-2 px-2">
                    <button
                      onclick="updateAddress(addressId)"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onclick="deleteAddress(addressId)"
                      className="text-red-500 hover:text-red-700  px-4"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Address;