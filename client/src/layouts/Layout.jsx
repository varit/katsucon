import React from 'react'
import { Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        {/* { !currentUser ? <div>Welcome</div> : <div>userName</div>} */}
        <div>Welcome</div>
        <div>to</div>
        <div>WaterFall</div>
      </header>
      <main>
        <div>
          <div className="block-one">
            <div>Where</div>
            <div>thoughts</div>
            <div>flows...</div>
          </div>

          <div className="block-two">
            <div>Sign Up</div>
            <div>Username</div>
            <div>Username Input</div>
            <div>Password</div>
            <div>Password Input</div>
          </div>

          <div className="block-three">
            <div>Confirm Password</div>
            <div>Confirm Password Input</div>
            <div>Email</div>
            <div>Email Input</div>
            <div>Confirm Email</div>
            <div>Confirm Email Input</div>
          </div>

          <div className="block-four">
            <div>Create</div>
            <div>Sign In</div>
          </div>

        </div>
      </main>
      <footer>
        <div>GitHub Logo</div>
        <div>LinkedIn Logo</div>
        <div>	&#169; Varit Seekhao</div>
      </footer>
    </>
  )
}
