import React from "react";

import { useEffect, useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
//import { getSchool, getSejour } from "../../../JS/actions/admin";
import { getSchool, getSejour } from "../../../JS/actions/user";

import SchoolCard from "../../admin/SchoolCard";
import CardItem from "../CardItem";
import { Link } from "react-router-dom";
import { villeContext } from "../../../App";

const Pays = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchool());
    dispatch(getSejour());

    //  console.log(sejour[0].langue);
  }, []);
  let school = useSelector((state) => state.userReducer.school);
  let sejour = useSelector((state) => state.userReducer.sejour);
  //let desc = useSelector((state) => state.userReducer.sejour[0].description1);

  // console.log(sejour[0]);
  let ville = useContext(villeContext);

  ville = ville.filter((school) => school.pays[0] === match.params.id);
  //let langue = { ...ville, langue };
  //console.log(langue);
  sejour = sejour.filter((sejour) => sejour.pays[0] === match.params.id);

  //let desc = sejour[0].description1;
  //console.log(sejour[0]);
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>
        {`Learn  in the ${match.params.id}`}
      </h2>{" "}
      <p
        style={{
          padding: "10px",
          fontFamily: "Arial",
        }}
      >
        {/*desc*/}{" "}
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul
            className="cards__items"
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {ville.map((el, i) => {
              return (
                <CardItem
                  src={`/upload/${el.ville}.jpg`}
                  text={`Learn ${el.langue} in the ${el.ville}`}
                  label={el.ville}
                  path={`/ville/${el.ville}`}
                />
              );
            })}

            {}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pays;
