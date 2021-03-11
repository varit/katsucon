import React from "react";
import "./Layout.css";
import ghIcon from "../assets/icons/github-icon.svg";
import liIcon from "../assets/icons/linkedin-icon.svg";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  let user = "";
  if (currentUser) {
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
            <div className="top-nav">Welcome, {user} <div className="logout" onClick={handleLogout}>Logout</div></div>
          </>
        )}

        <div className="mid-nav">to</div>
        <div className="bot-nav">WaterFall</div>
      </header>
      <div className="sides">{props.children}</div>

      <footer>
        <img className="gh-logo" src={ghIcon}/>
        <img className="li-logo" src={liIcon}/>
        <div> &#169; Varit Seekhao</div>
      </footer>
    </div>
  );
}
