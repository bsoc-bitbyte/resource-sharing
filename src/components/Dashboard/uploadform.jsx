import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from '../../components';
import Sidepanel from "./sidepanel";
import classNames from "classnames";
import Modal from "../Modal";

const Upload = ({open, setOpen}) => {
    return (
            <>
            <div class="flex items-center flex-col">
                            <div class="w-[78vw] bg-gray-100 dark:bg-[#E7E5E4] flex items-center justify-center m-5 shadow-md rounded-2xl flex-col px-3 py-5">
                                <input type="text" className="w-[85%] h-10 rounded-lg border border-gray-400 text-100 py-2 pl-16 m-5" placeholder="Title"/>
                                <textarea name="" id="" cols="30" rows="10" className="w-[85%] h-40 rounded-lg border border-gray-400 text-100 py-2 pl-16 mb-5" placeholder="Description"></textarea>
                                <label htmlFor="image" className="text-xl mb-2">Image:</label>
                                <input type="file" id="image" className="w-[85%] h-12 rounded-lg border border-gray-400 text-100 py-2 pl-16 mb-5" accept="image/*" multiple/>
                                <label htmlFor="pdf" className="text-xl mb-2">PDF:</label>
                                <input type="file" id="pdf" className="w-[85%] h-12 rounded-lg border border-gray-400 text-100 py-2 pl-16 mb-5" accept="application/pdf"/>
                                <input type="text" className="w-[85%] h-10 rounded-lg border border-gray-400 text-100 py-2 pl-16 m-5" placeholder="Category"/>
                                <input type="number" className="w-[85%] h-10 rounded-lg border border-gray-400 text-100 py-2 pl-16 m-5" placeholder="Number of pages"/>
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
            </div></>
    )
}


export default Upload ;