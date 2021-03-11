import Layout from "./layouts/Layout";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerUser, removeToken, verifyUser, loginUser } from "./services/auth";
import SignIn from "./screen/SignIn/SignIn.jsx";
import SignUp from "./screen/SignUp/SignUp.jsx";
// import Timeline from "./screen/Timeline/Timeline.jsx"
import MainContainer from "./containers/MainContainer";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      setCurrentUser(currentUser);
    };
    handleVerify();
  }, []);

  const handleSignIn = async (formData) => {
    const currentUser = await loginUser(formData);
    setCurrentUser(currentUser);
    history.push("/");
  };

  const handleSignUp = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser);
    history.push("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
    history.push("/")
  };

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
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
        <Route path="/signup"><SignUp handleSignUp={handleSignUp}/></Route>
        <Route path="/signin"><SignIn handleSignIn={handleSignIn}/></Route>
        <Route path="/"><MainContainer currentUser={currentUser}/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
