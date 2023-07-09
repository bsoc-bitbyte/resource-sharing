import React, { useEffect, useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase/ClientApp.mjs';
import { sendPasswordResetEmail } from 'firebase/auth';


function ResetPassword() {
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth); 
  const [emailid, setEmailid] = useState('');
  const [userr, loadingg, erorrr] = useAuthState(auth);
  if (userr)
  {
    return <Navigate replace to="/" />;
  }
  return (
    <div className=" h-screen flex items-center justify-center border-black pt-[10vh]" style={{
      backgroundImage: 'url("/loginpage-background-image.webp")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      filter: 'blur(0px)'
    }}>
      <div className="bg-white rounded-lg shadow-lg w-96 border-double border-4 border-sky-500" >
        <div className="flex justify-between items-center text-center w-full pl-10 pr-10 pt-5 pb-1">
          <h1 className="text-2xl font-bold dark:text-[#1A1A1C]" style={{ fontFamily: 'monospace' }}>Reset Password</h1>

          <h2 className="flex items-center justify-end dark:text-[#1A1A1C]">
            <img src="/iiitdmj-logo.webp" alt="pr-0 w-6 h-6" className="pr-0 w-8 h-8 iiitdmj-logo mx-1" />
            IIITDMJ
          </h2>
        </div>
        <hr className=' ' />
        <form className="px-6 py-4">
        <div className={`my-3 text-center text-base bg-red-500 text-white rounded-lg p-1 capitalize ${(error)? 'visible' : 'hidden'}`}>
              {(error) ? error.message.replaceAll('Firebase: Error (auth/', '').replaceAll(').', '').replaceAll('-', ' ') : null}
            </div>
          <div className="mb-6">
            <label className="text-gray-500">Email id</label>
            <input type="text" className={`w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none dark:text-[#1A1A1C] ${(error) ? 'border-red-500' : null}`} required onChange={(e) => setEmailid(e.target.value)}/>
          </div>
          {sending ? 
            <div className={`flex items-center justify-center h-10 ${(sending) ? 'visible' : 'hidden'}`}>
              <img src="/loader.gif" alt="" className='bg-white h-full' />
            </div> :
            <input 
              type="submit" 
              value="Send email" 
              className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg cursor-pointer hover:bg-blue-600" 
              onClick={(e) => {
                e.preventDefault();
                sendPasswordResetEmail(emailid)
              }}
            />
          }
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;