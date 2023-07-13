import React, {useState } from "react";
import NavBar from '../NavBar'
import { Link } from "react-router-dom";
import classNames from "classnames";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
    <NavBar />
      <div className="flex">
          <div
              className={` ${
                  open ? "w-12" : "w-60 "
              } Sidepanel flex flex-col h-screen ml-2 mt-20 p-3 bg-gray-100 rounded-lg shadow duration-300`}
          >
              <div 
                  className={` ${
                    open ? "w-0" : "space-y-3"
                  }
                  `}>
                  <div className="flex items-center justify-between">
                      <button onClick={() => setOpen(!open)}>
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
                    <div className={`logo`}>
                      <img className="" src="/fileSharing3.webp">
                      </img>
                    </div>

                    <div id='btns' className='ListItems flex-col justify-center w-full h-2/5 '> 

                        <button id='uploadsBtn' className='uploadsBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100 text-sm'>
                          <Link to='/uploads' className='w-full' >
                            UPLOADS
                          </Link>
                        </button>
                        <button id='downloadsBtn' className={` ${ open ? "text-xs" : "text-zero"}`}>
                          <Link to='/downloads' className='w-full' >
                            DOWNLOADS
                          </Link>  
                        </button>
                        <button id='bookmarksBtn' className='bookmarksBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100 text-sm'>
                          <Link to='/bookmarks' className='w-full'>
                            BOOKMARKS
                          </Link>    
                        </button>
                    </div>
                  </div>
              </div>
          </div>
          <div className="container ml-4 mr-4 mx-auto mt-32">
              <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-5">
                  <div className="w-full h-48 px-4 py-5 bg-white rounded-lg shadow">
                      
                  </div>
                  <div className="w-full h-48 px-4 py-5 bg-white rounded-lg shadow">
                     
                  </div>
                  <div className="w-full h-48 px-4 py-5 bg-white rounded-lg shadow">
                     
                  </div>
                  <div className="w-full h-48 px-4 py-5 bg-white rounded-lg shadow">
                     
                  </div>
                  <div className="w-full h-48 px-4 py-5 bg-white rounded-lg shadow">
                     
                  </div>
              </div>
          </div>
      </div>
    </>    
  );
}

  
                                 
export default Dashboard;