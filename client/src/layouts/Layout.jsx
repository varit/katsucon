import React from 'react'
import "./Layout.css";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser } = props;

  return (
    <div className="layout-container">
      <header>
        {/* { !currentUser ? <div className="top-nav">Welcome</div> : <div className="top-nav">currentUser.name</div>} */}
        
        <div className="mid-nav">to</div>
        <div className="bot-nav">WaterFall</div>
      </header>
      <main>
        
      </main>
      <footer>
        <div className="gh-logo">GitHub Logo</div>
        <div className="li-logo">LinkedIn Logo</div>
        <div>	&#169; Varit Seekhao</div>
      </footer>
    </div>
  )
}
