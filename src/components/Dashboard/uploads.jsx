import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from '../../components';
import classNames from "classnames";

const Uploads = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`main w-screen h-screen`}>
            <NavBar />
            <div className={`flex justify-start w-full h-full `}>
                <div
                    className={` Sidepanel ${open ? "w-12" : "w-[16%]"} flex flex-col h-screen ml-2 mt-20 p-3 fixed bg-gray-100 dark:bg-[#44403C] dark:!text-white rounded-lg shadow-md duration-300`}
                    >
                    <div
                        className={``}>
                        <div className={` ${open ? "w-12" : "w-60"} align `}>
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
                <div className={`uploads ${open ? "w-[95%]" :"w-[80%]"} h-full ${open? "ml-[12%]" : "ml-[18%]"} `}>

                    <div className={`w-full h-full grid grid-cols-1 gap-6 mb-6`}>

                        <div class="flex items-center justify-center flex-col">
                            <div className={`text text-4xl`}>
                                Uploads
                            </div>
                            <div class="w-[78vw] bg-[#f1f5f9] dark:bg-[#E7E5E4] flex items-center justify-center m-5 shadow-[2px_4px_8px_rgba(0,0,0,0.25)] rounded-2xl max-md:flex-col px-3">
                                <img class="w-64 rounded-2xl m-3" src="https://loremflickr.com/640/480" alt="" />
                                <div class="flex items-center justify-center w-full flex-col m-2 max-md:p-3">
                                    <div class="flex items-center justify-center w-full">
                                        <div class="flex items-center justify-left text-3xl text-black/[0.75] w-full">
                                            Linear Algebra
                                        </div>
                                        <div class="rounded-md m-2 p-1 flex items-center justify-center bg-[#FBBF24] shadow-[1.3333px_1.33333px_2.66667px_rgba(0,0,0,0.25)]">
                                            <button>
                                                <img class="w-7" src="/Bookmark.svg" alt="" />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="flex items-center justify-left w-full flex-wrap">
                                        <div class="bg-black/[0.68] m-1 px-5 py-1 text-sm rounded-2xl text-white">
                                            NKM notes
                                        </div>
                                        <div class="bg-black/[0.68] m-1 px-5 py-1 text-sm rounded-2xl text-white">
                                            Midsems
                                        </div>
                                        <div class="bg-black/[0.68] m-1 px-5 py-1 text-sm rounded-2xl text-white">
                                            Book
                                        </div>
                                        <div class="bg-black/[0.68] m-1 px-5 py-1 text-sm rounded-2xl text-white">
                                            Quiz
                                        </div>
                                    </div>
                                    <div class="flex items-end justify-end w-full h-28">
                                        <button class="theme-btn-shadow m-2 px-5 py-2 bg-[#3B82F6] shadow-[0px_4px_11.3333px_rgba(0,0,0,0.25)] text-white rounded-lg" fdprocessedid="jq2mk">
                                            Download
                                        </button>
                                        <a href="/details/1">
                                            <button class="theme-btn-shadow m-2 px-5 py-2 bg-[#3B82F6] shadow-[0px_4px_11.3333px_rgba(0,0,0,0.25)] text-white rounded-lg" fdprocessedid="diqe8">
                                                Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}


export default Uploads ;