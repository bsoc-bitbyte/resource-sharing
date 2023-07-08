import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase/ClientApp.mjs';
import { Navigate } from 'react-router-dom';

function SignForm() {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const [userr, loadingg, errorrr] = useAuthState(auth);
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [errorr, setErrorr] = useState(null);
  const [errorcause, setErrorcause] = useState('');
  const validEmail = /^\d{2}[A-Za-z]{3}\d{3}$/;
  const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{6,}$/;
  const signupuser = (emailid, password, confirmpassword) => {
    const emailexp = emailid.split('@');
    if (!(emailexp.length==2 && emailexp[1]=='iiitdmj.ac.in' && validEmail.test(emailexp[0])))
    {
        setErrorr('Enter valid institute email id.');
        setErrorcause('email');
    }
    else if (password!=confirmpassword)
    {
      setErrorr('Password and confirm pasword should match.');
      setErrorcause('password');
    }
    else if (!validPassword.test(password))
    {
      setErrorr('Password should be atleast 6 digit long.\nPassword should contain atleast one uppercase letter, one  lowercase letter, one digit and one special symbol.')
      setErrorcause('password');
    }
    else
    {
      createUserWithEmailAndPassword(emailid, password);
    }
  }
  useEffect(()=>{
    if (error)
    {
      if (error.message.toLowerCase().includes('password'))
      {
        setErrorcause('password');
      }
      else if (error.message.toLowerCase().includes('email'))
      {
        setErrorcause('email');
      }
    }
  }, [error])
  if (user || userr)
  {
    return <Navigate replace to="/" />;
  }
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
          <h1 className="text-2xl font-bold -m-4 dark:text-[#1A1A1C]" style={{ fontFamily: 'monospace' }}>SignUp</h1>

          <h2 className="flex items-center justify-end dark:text-[#1A1A1C]">
            <img src="/iiitdmj-logo.webp" alt="pr-0 w-6 h-6" className="pr-0 w-8 h-8 iiitdmj-logo mx-1" />
            IIITDMJ
          </h2>

        </div>
        <hr className=' ' />
        <form className="px-6 py-4">
          <div className={`my-3 text-center text-base bg-red-500 text-white rounded-lg p-1 text-gray-600 ${(errorr)? 'visible' : 'hidden'}`}>
              {(errorr) ? errorr : null}
            </div>
          <div className={`my-3 text-center text-base bg-red-500 text-white rounded-lg p-1 text-gray-600 ${(error)? 'visible' : 'hidden'}`}>
              {(error) ? error.message : null}
            </div>
          <div className="mb-6">
            <label className="text-gray-500">Name</label>
            <input type="text" className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none dark:text-[#1A1A1C]" required />
          </div>
          <div className="mb-6">
            <label className="text-gray-500">Institute Email ID</label>
            <input type="email" className={`w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none dark:text-[#1A1A1C] ${(errorcause=='email') ? 'border-red-500' : null}`} required onChange={(e) => setEmailid(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="text-gray-500">Password</label>
            <input type="password" className={`w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none dark:text-[#1A1A1C] ${(errorcause=='password') ? 'border-red-500' : null}`} required onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="text-gray-500">Confirm Password</label>
            <input type="password" className={`w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none dark:text-[#1A1A1C] ${(errorcause=='password') ? 'border-red-500' : null}`} required onChange={(e) => setConfirmPassword(e.target.value)}/>
          </div>

          <input type="submit" value="SignUp" className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg cursor-pointer hover:bg-blue-600" onClick={(e) => 
            {
              e.preventDefault();
              setErrorr(null);
              setErrorcause('');
              signupuser(emailid, password, confirmpassword)
            }
            }/>
            <div className={`flex items-center justify-center h-10 ${(loading || loading) ? 'visible' : 'hidden'}`}>
            <img src="/ecllipseloading.svg" alt="" className='bg-white h-full' />
          </div>
          <div className="mt-6 text-center text-base text-gray-600">
            Already a member? <a href="#" className="text-blue-500 hover:underline"><Link to="/login">Login</Link></a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignForm;