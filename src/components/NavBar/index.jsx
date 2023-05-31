import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode)
    {
      root.classList.add('dark');
    }
    else
    {
      root.classList.remove('dark');
    }
    console.log(root);
    console.log(darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  return (
    <div className='sticky'>
      <div className='flex rounded-xl shadow-md mx-3 my-4 bg-gray-100 dark:bg-gray-300 dark:text-white'>
        <div className='flex w-1/4 font-black px-2 py-2 text-lg items-center'>
          <Link to='/'>UniShare</Link>
        </div>
        <div className='flex w-3/4 flex-row-reverse items-center'>
          <button className='h-10 bg-white mx-2 rounded-lg shadow-md dark:bg-gray-400' onClick={toggleDarkMode}>
            <svg className='h-full' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className='fill-blue-500 dark:fill-yellow-500' d="M12.0557 3.59974C12.2752 3.2813 12.2913 2.86484 12.0972 2.53033C11.9031 2.19582 11.5335 2.00324 11.1481 2.03579C6.02351 2.46868 2 6.76392 2 12C2 17.5228 6.47715 22 12 22C17.236 22 21.5313 17.9764 21.9642 12.8518C21.9967 12.4664 21.8041 12.0968 21.4696 11.9027C21.1351 11.7086 20.7187 11.7248 20.4002 11.9443C19.4341 12.6102 18.2641 13 17 13C13.6863 13 11 10.3137 11 6.99996C11 5.73589 11.3898 4.56587 12.0557 3.59974Z" fill="#000000"></path> </g></svg>
          </button>
          <button className='rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 to-blue-800 text-white my-2 px-2 py-1 font-bold shadow-md'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar