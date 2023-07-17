import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from '../../components';
import Sidepanel from "./sidepanel";
import classNames from "classnames";

const Upload = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className={`main w-screen h-screen`}>
            <NavBar />
            <div className={`flex justify-start w-full h-full `}>
                <Sidepanel open={open} setOpen={setOpen} />
                <div className={`uploads ${open ? "w-[95%]" :"w-[80%]"} h-full ${open? "ml-[12%]" : "ml-[18%]"} `}>

                    <div className={`w-full h-full grid grid-cols-1 gap-6 mb-6`}>

                        <div class="flex items-center flex-col top-24 absolute">
                            <div className={`text text-4xl`}>
                                Upload
                            </div>
                            <div class="w-[78vw] bg-gray-100 dark:bg-[#E7E5E4] flex items-center justify-center m-5 shadow-md rounded-2xl flex-col px-3 py-5">
                                <input type="text" className="w-[85%] h-10 rounded-lg border border-gray-400 text-100 py-2 pl-16 m-5" placeholder="Title"/>
                                <textarea name="" id="" cols="30" rows="10" className="w-[85%] h-40 rounded-lg border border-gray-400 text-100 py-2 pl-16 mb-5" placeholder="Description"></textarea>
                                <label htmlFor="image" className="text-xl mb-2">Image:</label>
                                <input type="file" id="image" className="w-[85%] h-12 rounded-lg border border-gray-400 text-100 py-2 pl-16 mb-5" accept="image/*" multiple/>
                                <label htmlFor="pdf" className="text-xl mb-2">PDF:</label>
                                <input type="file" id="pdf" className="w-[85%] h-12 rounded-lg border border-gray-400 text-100 py-2 pl-16 mb-5" accept="application/pdf"/>
                                <button 
                                className={classNames({
                                  'theme-btn-shadow rounded-xl bg-[#3B82F6]': true,
                                  'px-4 py-2': true,
                                  'monu text-sm text-white font-normal': true,
                                  'mobile:text-xs': true,
                                })}
                                >
                                  Submit
                                </button>
                            </div>
                            </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}


export default Upload ;