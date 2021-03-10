import React from 'react'
import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        {/* { !currentUser ? <div>Welcome</div> : <div>userName</div>} */}
        <div className="top-nav">Welcome</div>
        <div className="mid-nav">to</div>
        <div className="bot-nav">WaterFall</div>
      </header>
      <main>
        <form className="main-bg">
          <div className="block-one">
            <div>Where</div>
            <div>thoughts</div>
            <div>flows...</div>
          </div>

          <div className="block-two">
            <div>Sign Up</div>
            <label for="username">Username</label>
            <input type="text" name="username"/>
            <label for="password">Password</label>
            <input type="text" name="password"/>
          </div>

          <div className="block-three">
            <label for="cpassword">Password</label>
            <input type="text" name="cpassword"/>
            <label for="email">Email</label>
            <input type="text" name="email"/>
            <label for="cemail">Confirm Email</label>
            <input type="text" name="cemail"/>
          </div>

          <div className="block-four">
            <div className="green-button">Create</div>
            <div className="pink-button">Sign In</div>
          </div>

        </form>
      </main>
      <footer>
        <div>GitHub Logo</div>
        <div>LinkedIn Logo</div>
        <div>	&#169; Varit Seekhao</div>
      </footer>
    </>
  )
}
