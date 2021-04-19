import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { types } from "../../context/auth/types";
import AuthContext from "../../context/auth/authContext";
import "./home.scss";

export default function Home() {
  const { user, dispatch } = useContext(AuthContext);


  //history router
  const history = useHistory();


  const exitUser = () => {
    dispatch({
      type: types.LOGOUT,
    });
    history.replace("/login");
  };

console.log(user);
  return (
    <div>
      <h3>en home</h3>
      <button className="" onClick={exitUser}>
        salir
      </button>
    </div>
  );
}
