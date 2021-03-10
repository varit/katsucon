import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn(props) {
  const [formData, setFormaData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleSignIn } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormaData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  return (
    <div>
      <form className="sides-bg" onSubmit= {(e) => {
        e.preventDefault();
        handleSignIn(formData);
      }}>
        <div className="block-one">
          <div className="t-where">Where</div>
          <div className="t-thoughts">thoughts</div>
          <div className="t-flows">flows...</div>
        </div>

        <div className="block-two">
          <div className="t-sign-in-up">Sign In</div>
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
          <button className="green-button">Sign In</button>
          <Link className="pink-button" to="/signup">Sign Up</Link>
        </div>
        <div className="block-four"></div>
      </form>
    </div>
  );
}
