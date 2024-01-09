import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    //Firebase Login stuff
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    //Firebase register stuff
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://www.flexgigzz.com/wp-content/uploads/2020/12/amazon-banner.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_SignInButton" type="submit" onClick={signIn}>
            Sign In
          </button>

          <p>Agree the amazon's conditions & terms</p>
          <button onClick={register} className="login_RegisterButton">
            Create your amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
