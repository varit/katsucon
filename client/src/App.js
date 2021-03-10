import Layout from "./layouts/Layout";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { registerUser, removeToken, verifyUser, loginUser } from "./services/auth";
import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    }
    handleVerify();
  },[]);

  const loginSubmit = async(registerData) => {
    const userData = await loginUser(registerData);
    setCurrentUser(userData);
  }

  const registerSubmit = async(registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setCurrentUser(null);
  }


  return (
    <Layout currentUser={currentUser}>
      <Switch>
        <Route path="/login">
          
        </Route>
        <Route path="/signup">

        </Route>
        <Route path="/">

        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
