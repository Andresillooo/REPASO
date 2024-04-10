import React from 'react';
import { Link } from 'react-router-dom';
import './InicioSesion.css'; 

export default function InicioSesion() {
  return (
    <div className="inicio-sesion-container">
      <div className="inicio-sesion-content">
        <img
          className="logo"
          src="https://www.shutterstock.com/image-photo/gadgets-accessories-isolated-on-white-600nw-1248412693.jpg"
          alt="Your Company"
        />
        <h2 className="titulo">Ingresa con tu cuenta</h2>

        <form className="formulario" action="#" method="POST">
          <div className="campo">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>

          <div className="boton">
            
          <Link to="/productos">
              <button type="submit">IniciarSesion</button>
            </Link>
          </div>
        </form>

        <p className="registro">
          ¿No tienes una cuenta?{' '}
          <a href="/registro" >Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
}
