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
      <div className='flex rounded-2xl shadow-md w-[90vw] mx-3 my-4 px-10 py-1 bg-[#F4F4F5] dark:bg-[#44403C] dark:text-white'>
        <div className='flex w-1/4 monu font-normal px-2 py-2 text-xl items-center'>
          <Link to='/'>UniShare</Link>
        </div>
        <div className='mobile:hidden flex w-3/4 flex-row-reverse items-center'>
          <button className='h-[32px] w-[32px] flex items-center justify-center bg-transparent mx-2 rounded-lg shadow-md' onClick={toggleDarkMode}>
            <img className={`h-[80%] ${(darkMode)?"hidden":"visible"}`} src="../src/assets/DarkModeIcon.svg" alt="" />
            <img className={`h-[80%] ${(darkMode)?"visible":"hidden"}`} src="../src/assets/LightModeIcon.svg" alt="" />
          </button>
          <button className='mobile:hidden monu text-sm rounded-xl bg-[#3B82F6] text-white mx-3 my-2 px-3 py-2 font-normal shadow-[0px_6px_17px_rgba(0,0,0,0.25)], inset-shadow-[0px_10px_34px_rgba(0,0,0,0.25)]' style={{boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.25), inset 0px 10px 34px rgba(0, 0, 0, 0.25)"}}>Sign Up</button>
          <button className='mobile:hidden monu text-sm rounded-xl bg-[#3B82F6] text-white mx-3 my-2 px-3 py-2 font-normal shadow-[0px_6px_17px_rgba(0,0,0,0.25)], inset-shadow-[0px_10px_34px_rgba(0,0,0,0.25)]' style={{boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.25), inset 0px 10px 34px rgba(0, 0, 0, 0.25)"}}>Login</button>
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
            <img className={`h-[80%] ${(darkMode)?"hidden":"visible"}`} src="../src/assets/DarkModeIcon.svg" alt="" />
            <img className={`h-[80%] ${(darkMode)?"visible":"hidden"}`} src="../src/assets/LightModeIcon.svg" alt="" />
          </button>
        </div>
      </div>
      <div className='flex anti-ham:hidden hidden rounded-2xl w-[52vw] mx-3 my-1 py-1 bg-[#F4F4F5] dark:bg-[#44403C] dark:text-white items-center justify-center border-2 border-solid border-gray-300 absolute top-[68px] right-[8px]' id='hammenu'>
        <hr />
        <button className='monu text-sm rounded-xl bg-[#3B82F6] text-white mx-1 my-1 px-3 py-2 font-normal shadow-[0px_6px_17px_rgba(0,0,0,0.25)], inset-shadow-[0px_10px_34px_rgba(0,0,0,0.25)]' style={{boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.25), inset 0px 10px 34px rgba(0, 0, 0, 0.25)"}}>Login</button>
        <button className='monu text-sm rounded-xl bg-[#3B82F6] text-white mx-1 my-1 px-3 py-2 font-normalshadow-md' style={{boxShadow: "0px 6px 17px rgba(0, 0, 0, 0.25), inset 0px 10px 34px rgba(0, 0, 0, 0.25)"}}>Sign Up</button>
      </div>
    </div>
  )
}

export default NavBar;
