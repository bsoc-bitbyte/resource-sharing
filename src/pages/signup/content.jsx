import React from 'react';
import { Link } from "react-router-dom";

function SignForm() {
  return (
    <div className=" h-screen flex items-center justify-center border-black pt-[11vh]" style={{
      backgroundImage: 'url("/loginpage-background-image.webp")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      filter: 'blur(0px)'
    }}>
      <div className="bg-white rounded-lg shadow-lg w-96 border-double border-4 border-sky-500 border-teal-100" >
        <div className="flex justify-between items-center text-center w-full pl-10 pr-10 pt-5 pb-1">
          <h1 className="text-2xl font-bold -m-4" style={{ fontFamily: 'monospace' }}>SignUp</h1>

          <h2 className="flex items-center justify-end">
            <img src="/iiitdmj-logo.webp" alt="pr-0 w-6 h-6" className="pr-0 w-8 h-8 iiitdmj-logo mx-1" />
            IIITDMJ
          </h2>
        </div>
        <hr className=' ' />
        <form className="px-6 py-4">
          <div className="mb-6">
            <label className="text-gray-500">Name</label>
            <input type="text" className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none" required />
          </div>
          <div className="mb-6">
            <label className="text-gray-500">Institute Email ID</label>
            <input type="email" className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none" required />
          </div>
          <div className="mb-6">
            <label className="text-gray-500">Password</label>
            <input type="password" className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none" required />
          </div>
          <div className="mb-6">
            <label className="text-gray-500">Confirm Password</label>
            <input type="password" className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none" required />
          </div>

          <input type="submit" value="SignUp" className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg cursor-pointer hover:bg-blue-600" />
          <div className="mt-6 text-center text-base text-gray-600">
            Already a member? <a href="#" className="text-blue-500 hover:underline"><Link to="/login">Login</Link></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignForm;