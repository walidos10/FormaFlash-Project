import React from "react";
import { Link } from "react-router-dom";
import "./logout.css";

const LogOut = () => {
  return (
    <div className="nav">
      <Link to="/">
        <button onClick={() => localStorage.removeItem("token")}>
          Log out
        </button>
      </Link>
      ;
    </div>
  );
};

export default LogOut;
