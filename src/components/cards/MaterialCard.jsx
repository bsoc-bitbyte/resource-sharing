import React from 'react'
import { Link } from 'react-router-dom'

const MaterialCard = (props) => {
  let key=0;
  return (
    <div className='flex items-center justify-center flex-col'>
     <div className='w-[90vw] bg-[#f1f5f9] dark:bg-[#E7E5E4] flex items-center justify-center m-5 shadow-[2px_4px_8px_rgba(0,0,0,0.25)] rounded-2xl max-md:flex-col px-3'>
        <img className='w-64 rounded-2xl m-3' src={props.material.image} alt="" />
        <div className='flex items-center justify-center w-full flex-col m-2 max-md:p-3'>
          <div className='flex items-center justify-center w-full'>
            <div className='flex items-center justify-left text-3xl text-black/[0.75] w-full'>
              {props.material.title}
            </div>
              <div className='rounded-md m-2 p-1 flex items-center justify-center bg-[#FBBF24] shadow-[1.3333px_1.33333px_2.66667px_rgba(0,0,0,0.25)]'>
              <button>
                <img className='w-7' src="/Bookmark.svg" alt="" />
            </button>
              </div>
          </div>
          <div className='flex items-center justify-left w-full flex-wrap'>
          {props.material.fields.map((item, index) => (
              <div className='bg-black/[0.68] m-1 px-5 py-1 text-sm rounded-2xl text-white' key={index}>
                {item}
              </div> 
            ))}
          </div>
          <div className='flex items-end justify-end w-full h-28'>
          <button className='theme-btn-shadow m-2 px-5 py-2 bg-[#3B82F6] shadow-[0px_4px_11.3333px_rgba(0,0,0,0.25)] text-white rounded-lg'>
              Download
            </button>
            <Link to={`/details/${props.id}`}>
            <button className='theme-btn-shadow m-2 px-5 py-2 bg-[#3B82F6] shadow-[0px_4px_11.3333px_rgba(0,0,0,0.25)] text-white rounded-lg'>
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaterialCard;