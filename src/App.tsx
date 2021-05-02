import React from "react";
import { Router } from "react-router-dom";
import "./App.scss";
import { createBrowserHistory as history } from "history";
import Login from "./app/login/Login";

// import LazyRenderComp por flujo (ej: /login, /dashboard, /sales)

function App() {
  return (
    <Router history={history()}>
      <Login />;
    </Router>
  );
}

export default App;
