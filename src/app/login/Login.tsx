import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router';
import { LazyLogin } from './login-lazy-render';

// revisar para las redireciones

const Login = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
      <Route exact path="/" component={LazyLogin}>
        </Route>
      </Switch>
    </Suspense>
  )
}

export default Login;
