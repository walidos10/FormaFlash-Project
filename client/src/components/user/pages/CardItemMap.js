import React from "react";
import { Link } from "react-router-dom";

const CardItemMap = ({ school }) => {
  console.log(school);
  return (
    <div>
      <>
        <li className="cards__item">
          <Link className="cards__item__link" to={school.ville}>
            <figure
              className="cards__item__pic-wrap"
              data-category={school.name}
            >
              <img
                className="cards__item__img"
                alt="Travel Image"
                src={school.pays}
              />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{school.langue}</h5>
            </div>
          </Link>
        </li>{" "}
      </>
    </div>
  );
};

export default CardItemMap;

//export default CardItem;
