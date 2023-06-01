import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openmenu, setOpenMenu] = useState(false);
  const genericHamburgerLine = `h-1 w-full my-0.5 rounded-full bg-black dark:bg-white transition ease transform duration-300`;

  useEffect(() => {
    const hammenu = window.document.getElementById('hammenu');
    if (openmenu) {
      hammenu.classList.remove('hidden');
    }
    else {
      hammenu.classList.add('hidden');
    }
  }, [openmenu]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const open = () => {
    setOpenMenu(!openmenu);
  }


  return (
    <div className='sticky flex w-screen justify-center flex-col items-center'>
      <div className='flex rounded-2xl shadow-[0px_6px_8px_rgba(0,0,0,0.25)] w-[90vw] mx-3 my-4 px-10 py-1 bg-[#F4F4F5] dark:bg-[#44403C] dark:text-white'>
        <div className='flex w-1/4 monu font-normal px-2 py-2 text-xl items-center'>
          <Link to='/'>UniShare</Link>
        </div>
        <div className='mobile:hidden flex w-3/4 flex-row-reverse items-center'>
          <button className='h-7 bg-transparent mx-2 rounded-lg shadow-md' onClick={toggleDarkMode}>
            <svg className='h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className='fill-[#3B82F6] dark:fill-yellow-500' d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z" fill="#000000"></path> </g></svg>
          </button>
          <button className='mobile:hidden monu text-md rounded-xl bg-[#3B82F6] text-white mx-3 my-2 px-3 py-2 font-normal shadow-md'>Sign Up</button>
        </div>
        <div className='flex w-3/4 anti-ham:hidden flex-row-reverse items-center'>
          <button
            className="flex flex-col h-6 w-6 rounded justify-center items-center group"
            onClick={open}
          >
            <div
              className={`${genericHamburgerLine} ${openmenu
                  ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${openmenu ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${openmenu
                  ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
                }`}
            />
          </button>
          <button className='h-[32px] w-[32px] flex items-center justify-center bg-transparent mx-2 rounded-lg shadow-md' onClick={toggleDarkMode}>
            <svg className='h-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className='fill-blue-500 dark:fill-yellow-500' d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z" fill="#000000"></path> </g></svg>
          </button>
        </div>
      </div>
      <div className='flex anti-ham:hidden hidden rounded-2xl w-[45vw] mx-3 my-0 py-1 bg-[#F4F4F5] dark:bg-[#44403C] dark:text-white items-center justify-center border-2 border-solid border-gray-300 absolute top-[68px] right-[8px]' id='hammenu'>
        <hr />
        <button className='monu text-md rounded-xl bg-[#3B82F6] text-white mx-3 my-2 px-3 py-2 font-normalshadow-md'>Sign Up</button>
      </div>
    </div>
  )
}

export default NavBar