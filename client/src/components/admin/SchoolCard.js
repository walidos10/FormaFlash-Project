import React from "react";
import "./listSchool.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteSchool, getSchoolById } from "../../JS/actions/admin";
import { Link } from "react-router-dom";
//import { Button } from "bootstrap";
const SchoolCard = ({ school, i }) => {
  const dispatch = useDispatch();

  return (
    <div key={i}>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure
            className="cards__item__pic-wrap"
            data-category={school.ville}
          >
            <img
              className="cards__item__img"
              alt={school.pays}
              src={`/upload/${school.ville}.jpg`}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{school.langue}</h5>
          </div>
          <Link to={`/EditSchool${school._id}`}>
            <button
              className="button btn-small"
              href="#"
              onClick={(e) => dispatch(getSchoolById(school._id))}
            >
              Update{" "}
            </button>{" "}
          </Link>{" "}
          <button
            className="button btn-small"
            href="#"
            onClick={(e) => dispatch(deleteSchool(school._id))}
          >
            delete{" "}
          </button>{" "}
        </div>
      </li>{" "}
    </div>
  );
};

export default SchoolCard;
