import React from "react";
import "./Login.css";
import ParticlesBackground from "./ParticlesBackground";

const Login = () => {
  return (
    <section className="login-section">
      <ParticlesBackground />
      <form>
        <h1>Login</h1>

        <div className="inputbox">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="email" id="user" name="user" required />
          <label htmlFor="user">User</label>
        </div>

        <div className="inputbox">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" id="password" name="password" required />
          <label htmlFor="password">Password</label>
        </div>

        <div className="forget">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" name="remember" /> Remember
          </label>
          <a href="#">Forgot Password</a>
        </div>

        <button type="submit">Login</button>

        <div className="register">
          <p>
            I don't have an account <a href="#">Register</a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
