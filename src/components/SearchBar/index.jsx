import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
     <div className='w-[90vw] bg-[#F3F4F6] flex items-center justify-center m-5 shadow-[3.33333px_4px_11.3333px_rgba(26,26,28,0.25)] rounded-2xl max-lg:flex-col'>
        <div className='m-5 p-2 flex items-center justify-left w-[60vw] bg-white rounded-2xl max-lg:w-[80vw]'>
          <img className='w-7' src="../src/assets/search.svg" alt="" />
          <input type="text" placeholder='Search' className='m-2 w-full'/>
        </div>
        <div className='flex w-[30vw] items-center justify-end max-lg:w-full pr-7'>
            <button>
            <div className='flex bg-white shadow-[2px_3.33333px_2.6667px_rgba(0,0,0,0.25)] rounded-2xl m-2 items-center font-normal px-2'>
                <img className='w-7 m-2' src="../src/assets/sort.svg" alt="" />
                <div className='m-2 ml-0 text-lg px-2'>
                    Sort
                </div>
            </div>
            </button>
            <button>
            <div className='flex bg-white shadow-[2px_3.33333px_2.6667px_rgba(0,0,0,0.25)] rounded-2xl m-2 items-center font-normal'>
                <img className='w-7 m-2' src="../src/assets/filter.svg" alt="" />
                <div className='m-2 ml-0 text-lg'>
                Filter
                </div>
            </div>
            </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;