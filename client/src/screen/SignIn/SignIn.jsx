import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login(props) {
  const [formData, setFormaData] = useState({
    usename: "",
    password: "",
  })
  const {usename, password} = formData;

  const handleChange = (e) => {
    
  }
  return (
    <div>
      <form className="sides-bg">
        <div className="block-one">
          <div className="t-where">Where</div>
          <div className="t-thoughts">thoughts</div>
          <div className="t-flows">flows...</div>
        </div>

        <div className="block-two">
          <div className="t-sign-in-up">Sign In</div>
          <label for="username">Username</label>
          <input type="text" name="username" value={username} onChange={() => {}}/>
          <label for="password">Password</label>
          <input type="text" name="password" value={password} onChange={() => {}}/>
        </div>

        <div className="block-four">
          <div className="green-button">Create</div>
          <div className="pink-button">Sign In</div>
        </div>
      </form>
    </div>
  );
}
