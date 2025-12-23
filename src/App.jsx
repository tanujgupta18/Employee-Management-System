import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      console.log("This is Admin");
    } else if (email == "user@gmail.com" && password == "123") {
      console.log("This is User");
    } else {
      console.log("Invalid Credentials");
    }
  };

  handleLogin();
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
