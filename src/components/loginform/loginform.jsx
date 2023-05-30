import "./loginform.css"
import React from 'react'

const Loginform = () => {
  return (
    <>
       <div className="container">
      <div className="wrapper">
        <div className="title"><span>Login Form</span></div>
        <form action="#">
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Email or Phone" required />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="pass"><a href="#">Forgot password?</a></div>
          <div className="row button">
          
             <button type="submit" className="btn-login">submit</button>
          </div>
          <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Loginform
