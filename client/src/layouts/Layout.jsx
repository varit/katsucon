import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  let user = "";
  if(currentUser){
    user = currentUser.username;
    user = user.charAt(0).toUpperCase() + user.slice(1);
  }

  return (
    <div className="layout-container">
      <header>
        {!currentUser ? (
          <div className="top-nav">Welcome</div>
        ) : (
          <>
            <div className="top-nav">Welcome, {user} </div>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}

        <div className="mid-nav">to</div>
        <div className="bot-nav">WaterFall</div>
      </header>

        <main>{props.children}</main>

      <footer>
        <div className="gh-logo">GitHub Logo</div>
        <div className="li-logo">LinkedIn Logo</div>
        <div> &#169; Varit Seekhao</div>
      </footer>
    </div>
  );
}
