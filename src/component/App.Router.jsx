import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/index.js";
import { AuthContext } from "../context/index.js";

const AppRouter = () => {
  const { isAuth } = useContext(AuthContext);
  const routes = isAuth ? privateRoutes : publicRoutes;

  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.component;
        return (
          <Route key={route.path} path={route.path} element={<Component />} />
        );
      })}
    </Routes>
  );
};

export default AppRouter;
