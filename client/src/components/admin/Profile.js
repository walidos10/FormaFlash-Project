import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./Navbar";

import ListSchool from "./ListShcool";
import ListSejours from "./ListSejours";
import { Button } from "../user/Button";

const Profile = () => {
  return (
    <div>
      <div>profile</div>

      <div className="container height-100 d-flex justify-content-center align-items-center">
        <div className="card text-center">
          <div className="py-4 p-2">
            <div>
              {" "}
              <img
                src="https://img.icons8.com/bubbles/100/000000/user.png"
                className="rounded"
                width={100}
              />{" "}
            </div>
            <div className="mt-3 d-flex flex-row justify-content-center">
              <h5>Admin</h5>{" "}
              <span className="dots">
                <i className="fa fa-check" />
              </span>
            </div>
            <div className="mt-3">
              {" "}
              <Link to="/listSchool">
                <button>affiche list ecole</button>
              </Link>{" "}
              <Link to="/listSejours">
                <button>
                  <i className="fa fa-users" /> affiche les sejours
                </button>{" "}
              </Link>
              <Link to="/addSchool">
                <button>
                  <i className="fa fa-users" /> add school
                </button>{" "}
              </Link>
              <Link to="/addSejours">
                <button>
                  <i className="fa fa-users" /> add sejours
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
