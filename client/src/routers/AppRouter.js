import React, { useContext } from "react";
import { Switch } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

import ControlSeguridad from "../pages/controlSeguridad/ControlSeguridad";
import Login from "../pages/login/Login";
// import Publico from "../pages/Publico";



//routes perzonalizadas
import HomeRouter from "./HomeRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {

  const {user} = useContext(AuthContext)

  return (
        <Switch>
          <PublicRoute exact path="/login"  component={Login}  isAuthenticated={user.logged} />
          {/* <PublicRoute exact path="/control-seguro"  component={ControlSeguridad}  isAuthenticated={user.logged} /> */}
          {/* <PublicRoute exact path="/publico"  component={Publico}  isAuthenticated={user.logged} /> */}
          <PrivateRoute path="/" component={HomeRouter} isAuthenticated={user.logged} />
        </Switch>
  );
}
