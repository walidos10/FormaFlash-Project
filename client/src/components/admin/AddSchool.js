import { useDispatch, useSelector } from "react-redux";
//import { userRegister } from ".../";
import { Redirect } from "react-router-dom";

import React, { useState } from "react";
import { addSchool } from "../../JS/actions/admin";
import Upload from ".././user/pages/Upload";
const AddSchool = () => {
  const [state, setstate] = useState({
    name: "",
    pays: "",
    ville: "",
    langue: "",
    programme: "",
    email: "",
    image: "",
    phone: "",
    prix: "",
  });

  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    dispatch(addSchool(state));
    setstate({
      name: "",
      pays: "",
      ville: "",
      langue: "",
      programme: "",
      email: "",
      image: "",

      phone: "",
      prix: "",
    });
  };
  return (
    <div className="container card-0 justify-content-center ">
      <div className="card-body px-sm-4 px-0">
        <div className="row justify-content-center mb-5">
          <div className="col-md-10 col">
            <h3 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left">
              {" "}
              Add School{" "}
            </h3>
          </div>
        </div>
        <div className="row justify-content-center round">
          <div className="col-lg-10 col-md-12 ">
            <div className="card shadow-lg card-1">
              <div className="card-body inner-card">
                <div className="row justify-content-center">
                  <div className="col-lg-5 col-md-6 col-sm-12">
                    <div className="form-group">
                      <label htmlFor="first-name"> Name</label>
                      <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={(e) => {
                          setstate({ ...state, name: e.target.value });
                        }}
                      />{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label htmlFor="Mobile-Number">pays</label>{" "}
                      <input
                        type="text"
                        name="pays"
                        value={state.pays}
                        onChange={(e) => {
                          setstate({ ...state, pays: e.target.value });
                        }}
                      />{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label htmlFor="Mobile-Number">ville</label>{" "}
                      <input
                        type="text"
                        name="ville"
                        value={state.ville}
                        onChange={(e) => {
                          setstate({ ...state, ville: e.target.value });
                        }}
                      />{" "}
                    </div>{" "}
                    <div className="form-group">
                      {" "}
                      <label htmlFor="time">langue </label>{" "}
                      <input
                        type="text"
                        name="langue"
                        value={state.langue}
                        onChange={(e) => {
                          setstate({ ...state, langue: e.target.value });
                        }}
                      />{" "}
                    </div>
                    <div className="form-group">
                      <label htmlFor="skill">programme</label>{" "}
                      <input
                        type="text"
                        name="programme"
                        value={state.programme}
                        onChange={(e) => {
                          setstate({ ...state, programme: e.target.value });
                        }}
                      />{" "}
                    </div>
                  </div>

                  <div className="form-group">
                    {" "}
                    <label htmlFor="phone">email</label>{" "}
                    <input
                      type="text"
                      name="email"
                      value={state.email}
                      onChange={(e) => {
                        setstate({ ...state, email: e.target.value });
                      }}
                    />{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="last-name">phone</label>{" "}
                    <input
                      type="text"
                      name="phone"
                      value={state.phone}
                      onChange={(e) => {
                        setstate({ ...state, phone: e.target.value });
                      }}
                    />{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    <label htmlFor="last-name">prix</label>{" "}
                    <input
                      type="text"
                      name="prix"
                      value={state.prix}
                      onChange={(e) => {
                        setstate({ ...state, prix: e.target.value });
                      }}
                    />{" "}
                  </div>

                  <div className="row justify-content-end mb-5">
                    <div className="col-lg-4 col-auto ">
                      <button
                        type="button"
                        className="btn btn-primary btn-block"
                        onClick={(e) => add(e)}
                      >
                        <small className="font-weight-bold">
                          Request a Quote
                        </small>
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSchool;
