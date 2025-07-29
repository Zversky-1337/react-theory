import React, { useContext, useEffect, useState } from "react";
import "./styles/App1.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import Navbar from "./component/UI/Navbar/Navbar.jsx";
import Error from "./pages/Error.jsx";
import AppRouter from "./component/App.Router.jsx";
import { AuthContext } from "./context/index.js";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  });

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
