import React from "react";
import "./Style/login.css";

const Login = () => {
  return (
    <div>
      <form class="login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
