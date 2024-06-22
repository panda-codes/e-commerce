import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignUp'>
      <div className="loginsignUp-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" />
          <input type="email" />
          <input type="password" />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          I agree to the terms and condition policy
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
