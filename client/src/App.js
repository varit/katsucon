import Layout from "./layouts/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  registerUser,
  removeToken,
  verifyUser,
  loginUser,
} from "./services/auth";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const loginSubmit = async (registerData) => {
    const userData = await loginUser(registerData);
    setCurrentUser(userData);
  };

  const registerSubmit = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
  };

  return (
    // <Layout currentUser={currentUser}>
      <Switch>
        <Route
          exact
          path="/"
          render = {() => {
            return !currentUser ? (
              <Redirect to="/login"></Redirect>
            ) : (
              <Redirect to="/timeline" />
            );
          }}
        />
        {/* <Redirect exact from="/" to="/login"/> */}
        <Route path="/signup"><h1>Sign Up</h1></Route>
        <Route path="/login"><h1>Login</h1></Route>
        <Route path="/"><h2>Home</h2></Route>
      </Switch>
    // </Layout>
  );
}

export default App;
