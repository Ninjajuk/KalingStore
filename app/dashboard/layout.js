
'use client'

// import { useSelector } from "react-redux";
import AdminSidebar from "./AdminSidebar";
// import {redirect} from 'next/navigation'





function AdminDashboard({children,}) {
  // const isAuthenticated=useSelector(item=>item.auth)
  // if(!isAuthenticated){
  //   redirect('/')
  // }

    return (
      <>
        <section className="w-full   ">
            <div className="flex flex-col md:flex-row  w-full h-full ">
              <div className="md:w-1/5 bg-gray-200 rounded-md shadow-md py-4 h-full" style={{height:'calc(100vh - 4rem)',}}>
                {/* <NavbarUser/> */}
                <AdminSidebar/>
              </div>
              <div className="md:w-4/5  rounded-md bg-white"style={{height:'calc(100vh - 4rem)',}}> {children}</div>
            </div>
        </section>
      </>
    );
  }
  export default  AdminDashboard;