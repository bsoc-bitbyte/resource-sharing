import React from 'react'
import classNames from 'classnames';
import { Link } from "react-router-dom";
import DarkMode from '../DarkMode';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase/ClientApp.mjs';

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signout, loadingg, erorr] = useSignOut(auth);
  return (
    <div className={classNames({
      'w-screen h-fit': true,
      'fixed top-2 z-[10000] ': true,
      'flex justify-center items-center': true,
    })}>
      <div className={classNames({
        'w-[97.5vw] h-fit': true,
        'px-10 py-2': true,
        'flex items-center justify-center': true,
        'rounded-2xl shadow-md bg-[#F4F4F5]': true,
        'dark:bg-[#44403C] dark:!text-white': true,
        'mobile:px-2': true,
      })}>
        {/* Logo... */}
        <div className={classNames({
          'w-1/4 h-fit p-2': true,
          'flex items-center justify-start': true,
          'monu font-normal text-xl text-[#37474f]': true,
          'dark:text-white': true,
          'mobile:text-lg': true,
        })}>
          <Link to='/'>UniShare</Link>
        </div>

        {/* NavItems... */}
        <div className={classNames({
          'w-3/4 h-fit': true,
          'flex items-center justify-end gap-4': true,
          'mobile:gap-2': true,
        })}>
          <button
            className={classNames({
              'theme-btn-shadow rounded-xl bg-[#3B82F6]': true,
              'px-4 py-2': true,
              'monu text-sm text-white font-normal': true,
              'mobile:text-xs': true,
              'hidden' : (user) ? true: false,
            })}
          >
            <Link to='/login'>Login</Link>
          </button>
          <button 
            className={classNames({
              'theme-btn-shadow rounded-xl bg-[#3B82F6]': true,
              'px-4 py-2': true,
              'monu text-sm text-white font-normal': true,
              'mobile:text-xs': true,
              'hidden' : (user) ? true: false,
            })}
          >
            <Link to='/Dashboard'>UserName</Link>
          </button>
          <button
            className={classNames({
              'theme-btn-shadow rounded-xl bg-[#3B82F6]': true,
              'px-4 py-2': true,
              'monu text-sm text-white font-normal': true,
              'mobile:text-xs': true,
              'hidden' : (user) ? false: true,
            })}
            onClick={() => signout()}
          >
            Logout
          </button>
          <DarkMode />
        </div>
      </div>
    </div>
  )
}

export default NavBar;
