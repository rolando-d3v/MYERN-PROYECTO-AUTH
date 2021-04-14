import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import "./login.scss";

export default function Login() {
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
        <form className="login__body__form">
          <div className="div-input">
            <label className="label-form">Identificacion en linea </label>
            <input className="input-form" type="text" />
          </div>
          <div className="div-input">
            <label className="label-form">Contraseña </label>
            <input className="input-form" type="text" />
          </div>

          <Link className="text-pass" to="">
            ¿Olvidó su contraseña?
          </Link>
          <button className="btn-form" type="submit">
            <IoIcons.IoIosUnlock />
            <span>Registrarse</span>
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
        <p className='text-end' >
          Bank of America, miembro de NA FDIC. Prestamista de vivienda
          equitativa {''}
          <GiIcons.GiHouse/>
        </p>
        <p className='text-end' >© 2021 Bank of America Corporation.</p>
      </footer>
    </div>
  );
}
