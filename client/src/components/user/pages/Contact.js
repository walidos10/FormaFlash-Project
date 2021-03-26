import React from "react";
import "../../../App.css";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./contact.css";
import { addrdv } from "../../../JS/actions/user";
//import addrdv from "../."
export default function Contact() {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    email: "",
    phoneNumber: "",
    message: "",
  });
  const sendMess = (e) => {
    e.preventdefault();
    dispatch(addrdv(state));
  };
  return (
    <div className="contact">
      {" "}
      <div id="form-main">
        <div id="form-div">
          <form className="form" id="form1">
            <p className="email">
              <input
                name="email"
                type="text"
                className="validate[required,custom[email]] feedback-input"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setstate({ ...state, email: e.target.value });
                }}
              />
            </p>
            <p className="name">
              <input
                name="phoneNumber"
                type="number"
                className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                placeholder="phoneNumber"
                id="name"
                onChange={(e) => {
                  setstate({ ...state, phoneNumber: e.target.value });
                }}
              />
            </p>
            <p className="text">
              <textarea
                name="text"
                className="validate[required,length[6,300]] feedback-input"
                id="comment"
                placeholder="Message"
                defaultValue={""}
                onChange={(e) => {
                  setstate({ ...state, message: e.target.value });
                }}
              />
            </p>
            <div className="submit">
              <input
                type="submit"
                defaultValue="Envoyer"
                id="button-blue"
                onClick={(e) => {
                  sendMess(state);
                }}
              />
              <div className="ease" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
