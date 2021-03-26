import React from "react";

import "./listSchool.css";
import "./Navbar.css";

import SchoolCard from "./SchoolCard";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSchool } from "../../JS/actions/admin";

const ListSchool = () => {
  const dispatch = useDispatch();
  let school = useSelector((state) => state.adminReducer.school);
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [...item[key], item])).values()];
  }
  const arr1 = getUniqueListBy(school, "pays");

  console.log("pays:" + JSON.stringify(arr1));

  useEffect(() => {
    dispatch(getSchool());
    console.log(school);
  }, []);
  return (
    <div>
      <h2>listSchool</h2>
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
              {school.map((school, i) => (
                <SchoolCard school={school} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSchool;
