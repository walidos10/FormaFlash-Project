import React from "react";

import { useEffect, useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { villeContext } from "../../../App";
import { getSchool, getSejour } from "../../../JS/actions/user";
import SchoolCard from "../../admin/SchoolCard";
import CardItem from "../CardItem";

const Ville = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSchool());
    dispatch(getSejour());
    // console.log(sejour);
  }, []);
  let school = useSelector((state) => state.userReducer.school);
  let sejour = useSelector((state) => state.userReducer.sejour);

  console.log(school);
  let ville = useContext(villeContext);

  useEffect(() => {
    dispatch(getSchool());
    dispatch(getSejour());
    // console.log(sejour);
  }, []);
  //console.log(match.params.id);

  ville = ville.filter((school) => school.ville[0] === match.params.id);
  sejour = sejour.filter((sejour) => sejour.ville[0] === match.params.id);
  let desc = sejour[0].description2;
  //console.log(sejour);
  // console.log(school[0].image[0]);
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>
        {`Learn ${sejour[0].langue}  in the ${match.params.id}`}
      </h2>{" "}
      <p
        style={{
          padding: "10px",
          fontFamily: "Arial",
        }}
      >
        {desc}{" "}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {ville.map((el, i) => {
          return (
            <CardItem
              src={`/upload/${el.ville}.jpg`}
              text={`Learn ${el.langue} in the ${el.ville}`}
              label={el.ville}
              // path={`/pays/${el.pays}/${el.ville}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Ville;
