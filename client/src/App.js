import Layout from "./layouts/Layout";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerUser,removeToken,verifyUser,loginUser } from "./services/auth";
import SignIn from "./screen/SignIn/SignIn.jsx";
import SignUp from "./screen/SignUp/SignUp.jsx";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignIn = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push("/");
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
        <Route path="/signup"><SignUp/></Route>
        <Route path="/signin"><SignIn handleSignIn={handleSignIn}/></Route>
        <Route exact path="/"><h2>Home</h2></Route>
      </Switch>
    </Layout>
  );
}

export default App;
