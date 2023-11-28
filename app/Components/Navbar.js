'use client'
import React, { useState } from "react";
import { FaCartPlus,FaUser } from "react-icons/fa";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LoginModal from "./Modal/LoginModal";
import SignUpModal from "./Modal/SignUpModal";

const Navbar = ({ siebaropen }, open) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/dashboard"); // Initialize with the default active link
  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigationLeft = [
    { name: "Home", href: "/", current: false },
    { name: "Shop", href: "team", current: false },
    { name: "About us", href: "about-us", current: false },

  ];
  const navigationLinks = [
    { name: "Login", href: "login", current: false,icon:<FaUser/>  },
    { name: "Cart", href: "/dashboard", current: true,icon:<FaCartPlus/> },
  ];


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsModalOpen(true);
  };
  const openSignupModal = () => {
    setSignupModalOpen(true);

  };

  const closeLoginModal = () => {
    setIsModalOpen(false);
    setSignupModalOpen(false)
  };
  const closeSignUpModal = () => {
    setSignupModalOpen(false);
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className="bg-purple-600  sticky top-0 z-10">
        <div className=" flex justify-between items-center py-4">
          {/* Menu Toggle (visible in mobile view) */}
          <button
            className="sm:block md:hidden md text-white ml-2 "
            onClick={siebaropen}
          >
            {open ? (
              <Bars3Icon className="h-6 w-6" />
            ) : (
              <XMarkIcon className="h-6 w-6 " />
            )}
          </button>
          {/* Logo (visible in desktop view) */}
          <div className="hidden md:block">
            <p href="/" className="px-4 text-white font-semibold text-lg">
              Yingkiong Store
            </p>
          </div>

          <div className="hidden md:flex space-x-4 px-4">
            {navigationLeft.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)} // Add onClick event handler
                className={classNames(
                  link.href === activeLink // Check if link.href matches activeLink
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "rounded-md px-4 py-2 text-sm font-medium"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex-grow md:w-1/2 mx-4 md:mx-0">
            <input
              type="text"
              className="w-full rounded-full px-4 py-2 bg-gray-700 text-white focus:outline-none"
              placeholder="Search..."
            />
          </div>

          {/* User PRofile */}
          {/* <div className="flex px-4 rounded-full">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div> */}
          <div className="md:hidden px-4">
            <span className="w-8 h-8 text-white text-lg relative">
              <FaCartPlus />
              <span className="absolute top-0 right-0  -mt-5 -mr-3 bg-red-500 text-white rounded-full text-sm px-1 py-0.5">
                {/* {cart && Array.isArray(cart) ? cart.length : 0} */}
                10
              </span>
            </span>
          </div>
          {/* User PRofile */}

          {/* Navigation Links (visible in desktop view) */}
          <div className="hidden md:flex space-x-4 px-4 ">
            {/* {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.href)} // Add onClick event handler
                className="text-white flex items-center text-md px-4 relative"
              >
                <span className="px-1">{link.name}</span>
                <span className="px-1">{link.icon}</span>
              </a>
            ))}
            <span className="absolute top-0 right-5 mt-1  bg-red-500 text-white rounded-full text-xxs px-2 py-0.5">
              {cart && Array.isArray(cart) ? cart.length : 0}
              10
            </span> */}
              <button
                className="text-white flex items-center text-md px-4 relative"
                onClick={openLoginModal}
              >
                <span className="px-1">Login</span>
                <span className="px-1"><FaUser/></span>
              </button>
              <button
                className="text-white flex items-center text-md px-4 relative"
                // onClick={()=>NavigateBefore('/cart')}
              >
                <span className="px-1">Cart</span>
                <span className="px-1"><FaCartPlus/></span>
              </button>
        
            <span className="absolute top-0 right-5 mt-1  bg-red-500 text-white rounded-full text-xxs px-2 py-0.5">
              {/* {cart && Array.isArray(cart) ? cart.length : 0} */}
              10
            </span>
  
          </div>
        </div>
      </nav>
      {isModalOpen ? (
          <LoginModal
            // updateFormData={updateFormData}
            isOpen={isModalOpen}
            onClose={closeLoginModal}
            onClick={openSignupModal}
           
          />
        ):null}
                {isSignupModalOpen ? (
          <SignUpModal
            // updateFormData={updateFormData}
            isOpen={isModalOpen}
            onClose={closeSignUpModal}
            onClick={openLoginModal}
      
          />
        ):null}
    </>
  );
};

export default Navbar;
