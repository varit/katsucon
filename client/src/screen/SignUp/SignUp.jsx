import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormaData] = useState({
    usename: "",
    password: "",
    cpassword: "",
    email: "",
    cemail: "",
  });
  const { username, password, cpassword, email, cemail } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormaData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  return (
    <div>
      <form className="sides-bg">
        <div className="block-one">
          <div className="t-where">Where</div>
          <div className="t-thoughts">thoughts</div>
          <div className="t-flows">flows...</div>
        </div>

        <div className="block-two">
          <div className="t-sign-in-up">Sign Up</div>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="block-three">
          <label for="cpassword">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            value={cpassword}
            onChange={handleChange}
          />
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <label for="cemail">Confirm Email</label>
          <input
            type="text"
            name="cemail"
            value={cemail}
            onChange={handleChange}
          />
        </div>

        <div className="block-four">
          <button className="green-button">Create</button>
          <Link className="pink-button" to="/signin">Sign In</Link>
        </div>
      </form>
    </div>
  );
}
