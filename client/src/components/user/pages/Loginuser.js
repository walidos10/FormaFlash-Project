import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { userLogin, userRegister } from "../../../JS/actions/user";
//import { userLogin } from "../../JS/actions/user";
import "./loginuser.css";

const Loginuser = () => {
  function signInButton(e) {
    document.getElementById("container").classList.remove("right-panel-active");
  }
  function signUpButton(e) {
    document.getElementById("container").classList.add("right-panel-active");
  }
  const [signIn, setsignIn] = useState({ email: "", password: "" });
  const [signUp, setsignUp] = useState({
    name: "",
    prenom: "",
    profession: "",
    pays: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const errors = useSelector((state) => state.userReducer.errors);
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const loading = useSelector((state) => state.userReducer.loading);

  const dispatch = useDispatch();
  const register = (signUp) => {
    dispatch(userRegister(signUp));
  };

  const login = (signIn) => {
    dispatch(userLogin(signIn));
  };
  return isAuth ? (
    <Redirect to="/profileUser" />
  ) : loading ? (
    <h1> please wait </h1>
  ) : (
    <div>
      {errors ? <p>{errors.msg}</p> : null}

      <div>
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              <span>or use your email for registration</span>

              <input
                name="name"
                type="text"
                id="name"
                placeholder="name"
                onChange={(e) => {
                  setsignUp({ ...signUp, name: e.target.value });
                }}
              />
              <input
                name="prenom"
                type="text"
                id="name"
                placeholder="prenom"
                onChange={(e) => {
                  setsignUp({ ...signUp, prenom: e.target.value });
                }}
              />
              <input
                name="profession"
                type="text"
                id="name"
                placeholder="profession"
                onChange={(e) => {
                  setsignUp({ ...signUp, profession: e.target.value });
                }}
              />
              <input
                name="pays"
                type="text"
                id="pays"
                placeholder="pays"
                onChange={(e) => {
                  setsignUp({ ...signUp, pays: e.target.value });
                }}
              />
              <input
                name="email"
                type="text"
                className="validate[required,custom[email]] feedback-input"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setsignUp({ ...signUp, email: e.target.value });
                }}
              />
              <input
                type="number"
                placeholder="phoneNumber"
                name="phoneNumber"
                onChange={(e) => {
                  setsignUp({ ...signUp, phoneNumber: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  setsignUp({ ...signUp, password: e.target.value });
                }}
              />

              <button
                onClick={(e) => {
                  register(signUp);
                }}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
              <span>or use your account</span>
              <input
                type="email"
                name="email"
                className="validate[required,custom[email]] feedback-input"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setsignIn({ ...signIn, email: e.target.value });
                }}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => {
                  setsignIn({ ...signIn, password: e.target.value });
                }}
              />
              <a href="#">Forgot your password?</a>
              <button
                onClick={(e) => {
                  login(signIn);
                }}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={(e) => {
                    signInButton(e);
                  }}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={(e) => {
                    signUpButton(e);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginuser;
