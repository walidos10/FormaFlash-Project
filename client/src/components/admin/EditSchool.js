import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { userRegister } from ".../";
import { useState, useEffect } from "react";
import { editSchool, getSchoolById } from "../../JS/actions/admin";
import { Link } from "react-router-dom";
import Upload from "../user/pages/Upload";
const EditSchool = ({ match }) => {
  const [newSchool, setnewSchool] = useState({
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

  const school = useSelector((state) => state.adminReducer.school[0]);
  // console.log(school);

  useEffect(() => {
    setnewSchool(school);
  }, [school]);
  const handleChange = (e) => {
    setnewSchool({ ...newSchool, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {" "}
      <h1>Edit school</h1>
      <div>
        <div className="container card-0 justify-content-center ">
          <div className="card-body px-sm-4 px-0">
            <div className="row justify-content-center mb-5">
              <div className="col-md-10 col">
                <h3 className="font-weight-bold ml-md-0 mx-auto text-center text-sm-left">
                  {" "}
                  Edit School{" "}
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
                            value={newSchool.name}
                          />{" "}
                        </div>
                        <div className="form-group">
                          {" "}
                          <label htmlFor="Mobile-Number">pays</label>{" "}
                          <input
                            type="text"
                            name="pays"
                            onChange={handleChange}
                            value={newSchool.pays}
                          />{" "}
                        </div>
                        <div className="form-group">
                          {" "}
                          <label htmlFor="Mobile-Number">ville</label>{" "}
                          <input
                            type="text"
                            name="ville"
                            onChange={handleChange}
                            value={newSchool.ville}
                          />{" "}
                        </div>{" "}
                        <div className="form-group">
                          {" "}
                          <label htmlFor="time">langue </label>{" "}
                          <input
                            type="text"
                            name="langue"
                            onChange={handleChange}
                            value={newSchool.langue}
                          />{" "}
                        </div>
                        <div className="form-group">
                          <label htmlFor="skill">programme</label>{" "}
                          <input
                            type="text"
                            name="programme"
                            onChange={handleChange}
                            value={newSchool.programme}
                          />{" "}
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="form-group">
                          {" "}
                          <label htmlFor="phone">email</label>{" "}
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={newSchool.email}
                          />{" "}
                        </div>

                        <div className="form-group">
                          {" "}
                          <label htmlFor="last-name">phone</label>{" "}
                          <input
                            type="text"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={newSchool.phone}
                          />{" "}
                        </div>
                        <div className="form-group">
                          {" "}
                          <label htmlFor="last-name">prix</label>{" "}
                          <input
                            type="text"
                            name="prix"
                            onChange={handleChange}
                            value={newSchool.prix}
                          />{" "}
                        </div>

                        <div className="row justify-content-end mb-5">
                          <div className="col-lg-4 col-auto ">
                            <Link to="/listSchool">
                              <button
                                onClick={(e) => {
                                  dispatch(
                                    editSchool(newSchool._id, newSchool)
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

export default EditSchool;
