import React from "react";

import "./listSchool.css";
import SejourCard from "./SejourCard";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSejour } from "../../JS/actions/admin";
//import SchoolCard from "./SchoolCard";

const ListSejours = () => {
  const dispatch = useDispatch();
  const sejour = useSelector((state) => state.adminReducer.sejour);
  console.log(sejour);

  useEffect(() => {
    dispatch(getSejour());
    console.log(sejour);
  }, []);
  return (
    <div>
      <h2>listSejour</h2>
      <div>
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
              {sejour.map((sejour, i) => (
                <SejourCard sejour={sejour} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSejours;
