import {
    FaHome,
    FaUsers,
    FaFolder,
    FaRegCalendarAlt,
    FaChartPie,
    FaFileAlt,
    FaLayerGroup,
    FaImage,
    FaMoon,
    FaRegCommentAlt,
    FaWrench,
    FaPowerOff,
    FaCog,
    FaCreditCard,
    FaAngleRight,
    FaAngleDown,
    FaAngleUp,
    FaRegHeart,
    FaBookmark,
    FaUserFriends ,
    FaBitbucket 
  } from "react-icons/fa";

  import { MdDashboard, MdOutlineSms, MdAnalytics,MdLogout,MdShoppingCart } from "react-icons/md";
  
  export const data = [
    {
      menu: "Dashboard",
      icon: <MdDashboard />,
      submenu: "",
      path: "/dashboard",
      active: false
    },
    {
      menu: "Products",
      icon: <FaFileAlt />,
      path: "/dashboard/products",
      active: false
    },
    {
      menu: "Add Products",
      icon: <MdShoppingCart  />,
      path: "/dashboard/addproducts",
      active: false
    },
    {
      menu: "Orders",
      icon: <FaFolder />,
      path: "/dashboard/orders",
      active: false
    },

    {
      menu: "Customers",
      icon: <FaUserFriends/>,
      path: "/dashboard/customers",
      active: false
    },
    {
      menu: "Team",
      icon: <FaUsers />,
      path: "/dashboard/team",
      active: false
    }
    ,
    {
      menu: "Setting",
      icon: <FaWrench />,
      path: "/dashboard/settings",
      active: false
    }
    // ,
    // {
    //   menu: "Logout",
    //   icon: <FaPowerOff/>,
    //   path: "/dashboard/logout",
    //   active: false
    // }
  ];



  // export const team = [
  //   { menu: "Heroicons", icon: <FaLayerGroup />, submenu: "", path: "" },
  //   { menu: "Tailwind Labs", icon: <FaImage />, submenu: "", path: "" },
  //   { menu: "Workation", icon: <FaMoon />, submenu: "", path: "" },
  //   { menu: "Frontend", icon: <FaRegCommentAlt />, submenu: "", path: "" }
  // ];
  // export const sidebarBottom = [
  //   { menu: "Setting", icon: <FaWrench />, submenu: "", path: "" },
  //   { menu: "Log Out", icon: "", submenu: "", path: "" }
  // ];
  
  // export const userprofile = [
  //   {
  //     id: 1,
  //     menu: "MY ORDERS",
  //     icon: <FaFolder />,
  //     submenu: [],
  //     path: "/myorder",
  //     active: false
  //   },
  //   {
  //     id: 2,
  //     menu: "MY Wishlist",
  //     icon: <FaRegHeart />,
  //     submenu: [],
  //     path: "/wishlist",
  //     active: false
  //   },
  //   {
  //     id: 3,
  //     menu: "ACCOUNT SETTINGS",
  //     icon: <FaCog />,
  //     iconDown: <FaAngleDown />,
  //     iconUp: <FaAngleUp />,
  //     submenu: [
  //       { title: "Profile Information", path: "/profile", active: false },
  //       { title: "Manage Address", path: "/address", active: false },
  //       { title: "PAN Card Information", path: "/pan", active: false }
  //     ],
  //     path: "null",
  //     active: false
  //   },
  //   {
  //     id: 4,
  //     menu: "PAYMENTS",
  //     icon: <FaCreditCard />,
  //     iconDown: <FaAngleDown />,
  //     iconUp: <FaAngleUp />,
  //     submenu: [
  //       { title: "Gift Cards", path: "/prof" },
  //       { title: "Saved UPI", path: "/address" },
  //       { title: "Saved Cards", path: "/savedcards" }
  //     ],
  //     path: "",
  //     active: false
  //   },
  //   {
  //     id: 5,
  //     menu: "MY STUFF",
  //     icon: <FaBookmark />,
  //     iconDown: <FaAngleDown />,
  //     iconUp: <FaAngleUp />,
  //     submenu: [
  //       { title: "MY Coupons", path: "/coupons", active: false },
  //       { title: "MY Reviews & Ratings", path: "/review", active: false },
  //       { title: "All Notifications", path: "/notifications", active: false }
  //     ],
  //     path: "null",
  //     active: false
  //   },
  //   { id: 6, menu: "Logout", icon: <FaPowerOff />, submenu: [], path: "/logout" }
  // ];
  