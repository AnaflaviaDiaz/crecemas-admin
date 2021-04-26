import React from 'react';
import { Button, InputError, TextInput, UnderlinedButton } from '@crecemas/components';
import './login.scss';
import logo from '../../assets/logo/crecemas-logo.svg';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const {
    handleSubmit,
    register,
    formState:{ isValid, errors }
  } = useForm(
    {
    resolver: yupResolver(validationSchema),
  }
  );

  const onSubmit = (data: LoginForm) => {
    console.log("onSubmit data", data);
    console.log("isValid", isValid);
  };

  const onError = () => {
    console.log("onError data");
    console.log("isValid", isValid);
  };

  return (
    <div className="Login">
      <div className="Login__logo">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
      </div>
      <div className="Login__form">
        <div className="Login__form__card">
          <h1>Iniciar sesión</h1>

          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <TextInput
              type="email"
              label="Correo electrónico"
              placeholder="email@email.com"
              {...register("email")}
              name="email"
            />
            {errors.email && (
              <InputError>{errors.email.message}</InputError>
            )}

            <TextInput
              label="Contraseña"
              type="password"
              placeholder="**********"
              {...register("password")}
              name="password"
            />
            {errors.password && (
              <InputError>{errors.password.message}</InputError>
            )}

            <Button type="submit">Ingresar</Button>
          </form>

          <UnderlinedButton>Recuperar contraseña</UnderlinedButton>
        </div>
      </div>
    </div>
  );
};

export default Login;

const validationSchema = yup.object().shape({
  email: yup.string().email('No es un correo válido').required('Ingresa el correo electrónico'),
  password: yup.string().min(6, 'Contraseña corta').required('Ingresa la contraseña'),
});
