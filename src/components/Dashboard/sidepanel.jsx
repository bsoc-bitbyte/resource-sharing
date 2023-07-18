import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import Upload from "./uploadform";


const Sidepanel = ({open, setOpen}) => {
    const [isopen, setIsOpen] = useState(false);
    return (
        <div className={` Sidepanel ${open ? "w-12" : "w-[16%]  max-sm:w-[50%]"} flex flex-col h-screen ml-2 mt-20 p-3 fixed bg-gray-100 dark:bg-[#44403C] dark:!text-white rounded-lg shadow-md duration-300`}>
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

                            <button id='uploadBtn' className={` uploadBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100`} onClick={() => {
                                setIsOpen(!isopen);
                            }}>
                            {open ? null : "UPLOAD"}
                            </button>
                            <Modal content={<Upload/>} open={isopen} setOpen={setIsOpen}/>
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
    )
}

export default Sidepanel;