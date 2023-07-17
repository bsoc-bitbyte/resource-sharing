import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from '../../components';
import Sidepanel from "./sidepanel";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`flex w-screen h-screen`}>
      { open ? null : <NavBar />}
      <div className="main flex w-full h-full">
        <div className={`${open ? "w-12" : "w-60 mt-20"} Sidepanel flex flex-col h-full ml-2 p-3 fixed bg-gray-100 dark:bg-[#44403C] dark:!text-white rounded-lg shadow-lg duration-300`}
        >
          <div
            className={``}>
            <div className={` ${open ? "w-12" : "w-full"} align `}>
              <button onClick={() => {console.log("check"); setOpen(!open)}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 h-72">
              <div className={` ${open ? "w-0" : "w-full"} logo`}>
                <img className="" src="/fileSharing3.webp">
                </img>
              </div>

              <div id='btns' className={` ${open ? "w-0" : "w-full"} ListItems flex-col justify-center h-2/5`} >

              <button id='uploadBtn' className={` uploadBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100`}>
                  <Link to='/upload' className='w-full' >
                  {open ? null : "UPLOAD"}
                  </Link>
                </button>
                <button id='uploadsBtn' className={` uploadsBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100`}>
                  <Link to='/uploads' className='w-full' >
                  {open ? null : "UPLOADS"}
                  </Link>
                </button>
                <button id='downloadsBtn' className='downloadsBtnBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100 text-sm'>
                  <Link to='/downloads' className='w-full' >
                  {open ? null : "DOWNLOADS"}
                  </Link>
                </button>
                <button id='bookmarksBtn' className='bookmarksBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100 text-sm'>
                  <Link to='/bookmarks' className='w-full'>
                  {open ? null : "BOOKMARKS"}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`container flex flex-col justify-center h-full md:h-full ${open? "ml-16 w-[90%]" : "ml-64 w-full mt-20"} mr-16 mt-8`}>
          <div className={`Stats grid lg:grid-cols-3 gap-6 ${open? "w-full ml-4":"w-full ml-12"} mb-16 mt-20`}>
            <div className="rounded-lg bg-gray-100 h-44 w-full p-4 shadow-sm">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Bookmarks
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                <Link to={`/bookmarks`} >12</Link>
              </div>
            </div>
            <div className="rounded-lg bg-gray-100 h-44 w-full p-4 shadow-sm">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Uploads
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                <Link to={`/uploads`} >45</Link>
              </div>
            </div>
            <div className="rounded-lg bg-gray-100 h-44 w-full p-4 shadow-sm">
              <div className="text-sm font-medium text-gray-500 truncate">
                Total Downloads
              </div>
              <div className="mt-1 text-3xl font-semibold text-gray-900">
                <Link to={`/downloads`}>20</Link>
              </div>          
            </div>
          </div>
          <div className={`Userdata grid col-1 bg-gray-100 h-96 ${open? "w-full ml-4":"w-full ml-12"} p-8 shadow-sm rounded-lg`}>
            <p className={`username text-3xl font-semibold text-gray-900 truncate`}>
              Name : Ashish K Kundu
            </p>
            <p className={`username text-3xl font-semibold text-gray-900 truncate`}>
              Roll No : 201269
            </p>
            <p className={`username text-3xl font-semibold text-gray-900 truncate`}>
              Batch : 2012
            </p>
          </div>
        </div>
      </div >
    </div>    
  );
}



export default Dashboard;