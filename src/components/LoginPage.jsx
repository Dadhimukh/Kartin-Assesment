import React from 'react'
import "./LoginPage.css"

const LoginPage = () => {
  return (
    <div className="loginNavbar">
      <div className="loginLogo">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5969/5969117.png"
          alt="company Logo"
        />
        <h1 className="loginLogoDetails">HLGS(Healthy Living Guide for Seniors)</h1>
      </div>
      <div className="loginSection">
        <div className="loginInput">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="loginInput">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default LoginPage