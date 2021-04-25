import React from 'react';
import { Button, TextInput, UnderlinedButton } from '@crecemas/components';
import './login.scss';
import logo from '../../assets/logo/crecemas-logo.svg';

// TODO: change any to interface
const Login: React.FC<any> = (props) => {
  return (
    <div className="Login" {...props}>
      <div className="Login__logo">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </div>
      <div className="Login__form">
        <div className="Login__form__card">
          <h1>Iniciar sesión</h1>
          <form>
            <TextInput
              name="email"
              label="Correo electrónico"
              placeholder="email@email.com"
            />
            <TextInput
              name="password"
              label="Contraseña"
              type="password"
              placeholder="**********"
            />
            <Button>Ingresar</Button>
          </form>
          <UnderlinedButton>Recuperar contraseña</UnderlinedButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
