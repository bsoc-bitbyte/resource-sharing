import React from 'react'
import classNames from 'classnames';

const SearchBar = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
     <div className={classNames({
      'w-[90vw] h-fit': true,
      'm-5 rounded-2xl': true,
      'bg-[#f1f5f9] dark:bg-[#E7E5E4]': true,
      'flex max-lg:flex-col items-center justify-center': true,
      'shadow-[3.33333px_4px_11.3333px_rgba(26,26,28,0.25)]': true,
     })}>
        <div className='m-5 p-2 flex items-center justify-left w-[60vw] bg-white rounded-2xl max-lg:w-[80vw]'>
          <img className='w-7' src="/search.svg" alt="" />
          <input type="text" placeholder='Search' className='m-2 w-full'/>
        </div>
        <div className={classNames({
          'w-[30vw] pr-11': true,
          'flex items-center justify-end': true,
          'max-lg:w-full mobile:justify-center mobile:pr-0': true,
        })}>
            <button>
            <div className={classNames({
              'flex items-center': true,
              'px-2 m-2': true,
              'bg-white rounded-2xl font-normal': true,
              'shadow-[2px_3.33333px_2.6667px_rgba(0,0,0,0.25)]': true,
            })}>
                <img className='w-7 m-2' src="/sort.svg" alt="" />
                <div className='m-2 ml-0 text-lg px-2 text-gray-700 font-bold'>
                    Sort
                </div>
            </div>
            </button>
            <button>
            <div className={classNames({
              'flex items-center': true,
              'm-2': true,
              'bg-white rounded-2xl font-normal': true,
              'shadow-[2px_3.33333px_2.6667px_rgba(0,0,0,0.25)]': true,
            })}>
                <img className='w-7 m-2' src="/filter.svg" alt="" />
                <div className='m-2 ml-0 text-lg text-gray-700 font-bold'>
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