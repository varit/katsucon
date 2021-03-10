import Layout from "./layouts/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerUser,removeToken,verifyUser,loginUser } from "./services/auth";
import SignIn from "./screen/SignIn/SignIn.jsx";
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
    <Layout currentUser={currentUser}>
      <Switch>
        <Route
          exact
          path="/"
          render = {() => {
            return !currentUser ? (
              <Redirect to="/signin"></Redirect>
            ) : (
              <Redirect to="/timeline" />
            );
          }}
        />
        {/* <Redirect exact from="/" to="/signin"/> */}
        <Route path="/signup"><h1>Sign Up</h1></Route>
        <Route path="/signin"><SignIn/></Route>
        <Route exact path="/"><h2>Home</h2></Route>
      </Switch>
    </Layout>
  );
}

export default App;
