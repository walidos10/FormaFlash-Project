import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin } from "../../JS/actions/admin";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const errors = useSelector((state) => state.adminReducer.errors);
  const isAuth = useSelector((state) => state.adminReducer.isAuth);
  const loading = useSelector((state) => state.adminReducer.loading);

  console.log(errors);

  const dispatch = useDispatch();

  const login = () => {
    dispatch(
      userLogin({
        email,
        password,
      })
    );

    setEmail("");
    setPassword("");
  };

  //   if (isAuth) return <Redirect to="/profile" />;

  return isAuth ? (
    <Redirect to="/profile" />
  ) : loading ? (
    <h1> please wait </h1>
  ) : (
    <div>
      {errors ? <p>{errors.msg}</p> : null}
      <form className="login-form">
        <p className="login-text">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x" />
            <i className="fa fa-lock fa-stack-1x" />
          </span>
        </p>
        <input
          type="email"
          className="login-username"
          autofocus="true"
          required="true"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login-password"
          required="true"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="submit"
          name="Login"
          defaultValue="Login"
          className="login-submit"
          onClick={login}
        />
      </form>

      <div className="underlay-photo" />
      <div className="underlay-black" />
    </div>
  );
};

export default Login;
