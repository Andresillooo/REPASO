import React from 'react';
import { Link } from 'react-router-dom';
import './Registrarse.css'; 

export default function RegistroForm() {
  return (
    <div className="inicio-sesion-container"> 
      <div className="inicio-sesion-content"> 
        <form className="formulario" action="#" method="POST">
          <h2 className="titulo">Regístrate</h2>

          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              autoComplete="name"
            />
          </div>

          <div className="campo">
            <label htmlFor="emailRegistro">Correo Electrónico</label>
            <input
              id="emailRegistro"
              name="emailRegistro"
              type="email"
              required
              autoComplete="email"
            />
          </div>

          <div className="campo">
            <label htmlFor="passwordRegistro">Contraseña</label>
            <input
              id="passwordRegistro"
              name="passwordRegistro"
              type="password"
              required
              autoComplete="new-password"
            />
          </div>

          
            <p className="boton">
            <Link to="/login">
              <button type="submit">Registrarse</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );


}