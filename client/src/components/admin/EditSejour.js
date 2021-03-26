import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { userRegister } from ".../";
import { useState, useEffect } from "react";
import { editSchool, editSejour, getSchoolById } from "../../JS/actions/admin";
import { Link } from "react-router-dom";

const EditSejour = ({ match }) => {
  const [newSejour, setnewSejour] = useState({
    name: "",
    pays: "",
    ville: "",
    langue: "",
    programme: "",
    description1: "",
    description2: "",
  });
  const dispatch = useDispatch();

  const sejour = useSelector((state) => state.adminReducer.sejour[0]);
  // console.log(school);

  useEffect(() => {
    setnewSejour(sejour);
  }, [sejour]);
  const handleChange = (e) => {
    setnewSejour({ ...newSejour, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {" "}
      <h1>Edit sejour</h1>
      <div>
        <div className="container card-0 justify-content-center ">
          <div className="card-body px-sm-4 px-0">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 col">
                <h3 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left">
                  {" "}
                  Edit Sejour{" "}
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
                            onChange={handleChange}
                            value={newSejour.name}
                          />{" "}
                        </div>
                        <div className="form-group">
                          {" "}
                          <label htmlFor="Mobile-Number">pays</label>{" "}
                          <input
                            type="text"
                            name="pays"
                            onChange={handleChange}
                            value={newSejour.pays}
                          />{" "}
                        </div>
                        <div className="form-group">
                          {" "}
                          <label htmlFor="Mobile-Number">ville</label>{" "}
                          <input
                            type="text"
                            name="ville"
                            onChange={handleChange}
                            value={newSejour.ville}
                          />{" "}
                        </div>{" "}
                        <div className="form-group">
                          {" "}
                          <label htmlFor="time">langue </label>{" "}
                          <input
                            type="text"
                            name="langue"
                            onChange={handleChange}
                            value={newSejour.langue}
                          />{" "}
                        </div>
                        <div className="form-group">
                          <label htmlFor="skill">programme</label>{" "}
                          <input
                            type="text"
                            name="programme"
                            onChange={handleChange}
                            value={newSejour.programme}
                          />{" "}
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="phone">description1</label>{" "}
                          <input
                            type="text"
                            name="description1"
                            onChange={handleChange}
                            value={newSejour.description1}
                          />{" "}
                        </div>

                        <div className="form-group">
                          {" "}
                          <label htmlFor="last-name">description2</label>{" "}
                          <input
                            type="text"
                            name="description2"
                            onChange={handleChange}
                            value={newSejour.description2}
                          />{" "}
                        </div>
                        <div className="row justify-content-end mb-5">
                          <div className="col-lg-4 col-auto ">
                            <Link to="/listSejours">
                              <button
                                onClick={(e) => {
                                  dispatch(
                                    editSejour(newSejour._id, newSejour)
                                  );
                                }}
                              >
                                <small className="font-weight-bold">
                                  Request a Quote
                                </small>
                              </button>{" "}
                            </Link>
                          </div>
                        </div>
                      </div>
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

export default EditSejour;
