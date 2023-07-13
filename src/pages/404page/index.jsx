import React from 'react';
import { Link } from 'react-router-dom';
import page404Img from './page404.png'

const PageNoteFound = () => {

    return (
        <body className='bg-[#ffffff] font-medium'>
            <div className="mt-12">
                <div className="text-center tracking-wide">
                    <p className='text-4xl my-8 font-bold'>Uh-Oh...</p>
                    <p className='text-xl my-8'>The page you are looking for may have been moved, deleted 
                        <br /> or possibly never existed.
                    </p>
                    <div className='relative'>
                        <img src= {page404Img} alt="painter painting 404" className="w-2/5 mx-auto" />
                        <Link to="/">
                            <button className="bg-sky-500 text-white border-none py-4 px-8 btn" >BACK TO HOMEPAGE</button>
                        </Link>
                    </div>    
                </div>
            </div>
        </body>
    );
}


export default PageNoteFound;
