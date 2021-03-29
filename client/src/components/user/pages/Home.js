import React, { useContext } from "react";
import { paysContext, langueContext } from "../../../App";
import "../../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

import { useState } from "react";
import { useEffect } from "react";
//import { matchPath, useHistory } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { getSchool } from "../../../JS/actions/user";
import CardItem from "../CardItem";
import { Link } from "react-router-dom";
//import { getSchool } from "../../JS/actions/admin";

function Home() {
  const pays = useContext(paysContext);
  const langue = useContext(langueContext);

  const dispatch = useDispatch();
  const school = useSelector((state) => state.userReducer.school);
  useEffect(() => {
    dispatch(getSchool());
  });
  return (
    <>
      <HeroSection />

      <div className="cards">
        <h1>Browse programs by popular languages</h1>

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
              {langue.map((el, i) => {
                return (
                  <CardItem
                    src={`/upload/${el.langue}.jpg`}
                    text={`Learn ${el.langue}`}
                    label={el.langue}
                    path={`/langue/${el.langue}`}
                  />
                );
              })}

              {}
            </ul>
          </div>
        </div>
        <h1>Browse programs by popular destinations</h1>
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
              {pays.map((el, i) => {
                return (
                  <CardItem
                    src={`/upload/${el.pays}.jpg`}
                    text={`Learn ${el.langue} in ${el.pays}`}
                    label={el.pays}
                    path={`/pays/${el.pays}`}
                  />
                );
              })}
              {}
            </ul>
          </div>
        </div>
      </div>
      {/*
     <Cards
        title="Browse programs by popular destinations

"
      />

    */}
      <Footer />
    </>
  );
}

export default Home;
