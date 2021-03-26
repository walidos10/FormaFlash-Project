import React from "react";
import "./listSchool.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteSejour, getSejourById } from "../../JS/actions/admin";
import { Link } from "react-router-dom";
const SejourCard = ({ sejour, i }) => {
  const dispatch = useDispatch();

  return (
    <div key={i}>
      <li className="cards__item">
        <div className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={sejour.pays}>
            <img
              className="cards__item__img"
              alt={sejour.langue}
              src={sejour.image}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{sejour.langue}</h5>
          </div>
          <Link to={`/EditSejour${sejour._id}`}>
            <button
              className="button btn-small"
              href="#"
              onClick={(e) => dispatch(getSejourById(sejour._id))}
            >
              Update{" "}
            </button>{" "}
          </Link>{" "}
          <button
            className="button btn-small"
            href="#"
            onClick={(e) => dispatch(deleteSejour(sejour._id))}
          >
            delete{" "}
          </button>{" "}
        </div>
      </li>{" "}
    </div>
  );
};

export default SejourCard;
