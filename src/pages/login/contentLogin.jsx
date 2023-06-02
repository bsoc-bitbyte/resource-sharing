import React from 'react'
const LoginPage =() =>{
    return (
        <>
         <div class="body">
            <div class="center"><div class="login">
      <h1>Login  </h1>
  <h2><img src="./src/assets/iiitdmj-logo.jpg" alt="iiitdmj-logo" class="iiitdmj-logo" /> IIITDMJ</h2></div>
      <form method="post">
        <div class="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div class="txt_field">
          <input type="password" required />
          {/* <span></span> */}
          <label>Password</label>
        </div>
        <div class="pass1"> <div class="pass">Forgot Password? </div><div class="checkb1"><input type="checkbox" /> Remember Me</div></div>
        
        <input type="submit" value="Login" />
        <div class="signup_link">
          Not a member? <a href="#">Signup</a>
        </div>
      </form>
    </div>
    </div>
        </>
    )
}
export default LoginPage