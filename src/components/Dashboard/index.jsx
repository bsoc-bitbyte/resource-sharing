import React from 'react'
import NavBar from '../NavBar'
import { Link } from "react-router-dom";
import { useState } from "react";
import { doc } from 'firebase/firestore';


const Dashboard = () => {
    return (
      <div className="main w-screen h-screen my-4 py-4 bg-gray-100">
        <NavBar />
          <div className='flex justify-center'>
            <div id='sidePanel' className="side_panel bg-gray-200 fixed top-20 left-4 h-[calc(100vh-2rem)] w-full max-w-[14rem] rounded-md p-4 shadow-xl shadow-blue-gray-900/5">
              <button id='toggleOffBtn' onClick={(e) => ToggleOff() } className='toggleSidepanel text-right mt-1  text-2xl font-bold'> x </button>
              <div className="mb-2 p-4">
                <img class="w-full h-2/5" src="public\yellowBlob-cropped.webp">
                </img>
              </div>
              <div id='btns' className='ListItems flex-col justify-center w-full h-2/5 '> 
                
                  <button onClick id='uploadsBtn' className='uploadsBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100 text-sm'>
                    <Link to='/uploads' className='w-full' >
                      UPLOADS
                    </Link>
                  </button>
                  <button onClick id='downloadsBtn' className='downloadsBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100 text-sm'>
                    <Link to='/downloads' className='w-full' >
                      DOWNLOADS
                    </Link>  
                  </button>
                  <button onClick id='bookmarksBtn' className='bookmarksBtn  w-full my-4 rounded-lg pb-8 pt-4 text-center h-8 hover:bg-orange-600 bg-orange-400 font-bold text-gray-100 text-sm'>
                    <Link to='/bookmarks' className='w-full'>
                      BOOKMARKS
                    </Link>    
                  </button>
                 
              </div>
            </div>
            <div id='centerBody' className='centerBody w-full h-full ml-64 mt-16 px-4 bg-gray-100 shadow-blue-gray-900/5'> 
              <div className='flex justify-left'>
                <button id='toggleOnBtn' onClick={(e) => ToggleOn() } className='toggleSidepanel  text-2xl font-bold'> </button>
                <p id='dashboardText' className=' text-2xl font-bold'>Dashboard</p>
              </div>
              <div className='grid lg:grid-cols-3 gap-5 mb-16 pt-8 bg-gray-100 w-9/10'>
                <div className='rounded bg-white h-40 shadow-sm'></div>
                <div className='rounded bg-white h-40 shadow-sm'></div>
                <div className='rounded bg-white h-40 shadow-sm'></div>
              </div>
              <div className='grid col-1 bg-white h-96 shadow-sm w-9/10'>

              </div>
            </div>
          </div>
      </div>
    );
  };

  function ToggleOff() {
    console.log("working");
    document.getElementById('toggleOnBtn').innerHTML = "  &#9776;"
    document.getElementById('dashboardText').style.marginLeft = "1rem"
    document.getElementById('toggleOnBtn').style.width = " 2rem"
    document.getElementById('toggleOffBtn').innerHTML = " "
    document.getElementById('sidePanel').style.width = "0px";
    document.getElementById('sidePanel').style.padding = "0px";
    document.getElementById('uploadsBtn').innerText = " "
    document.getElementById('downloadsBtn').innerText = " "
    document.getElementById('bookmarksBtn').innerText = " "
    document.getElementById('btns').style.width = "0px";
    document.getElementById('centerBody').style.marginLeft = "2rem";
  }

  function ToggleOn() {
    console.log("working");
    document.getElementById('toggleOnBtn').innerHTML = " "
    document.getElementById('toggleOnBtn').style.width = "0px"
    document.getElementById('toggleOffBtn').innerHTML = "X"
    document.getElementById('sidePanel').style.width = "14rem";
    document.getElementById('sidePanel').style.padding = "1rem";
    document.getElementById('uploadsBtn').innerText = "UPLOADS "
    document.getElementById('downloadsBtn').innerText = "DOWNLOADS "
    document.getElementById('bookmarksBtn').innerText = "BOOKMARKS "
    document.getElementById('btns').style.width = "100%";
    document.getElementById('centerBody').style.marginLeft = "16rem";
  }
  
export default Dashboard;