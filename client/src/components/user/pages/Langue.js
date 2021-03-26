import React from "react";

import { useEffect, useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { paysContext } from "../../../App";
import { getSchool, getSejour } from "../../../JS/actions/admin";
import SchoolCard from "../../admin/SchoolCard";
import CardItem from "../CardItem";

const Langue = ({ match }) => {
  const dispatch = useDispatch();
  let school = useSelector((state) => state.adminReducer.school);
  //let sejour = useSelector((state) => state.adminReducer.sejour);
  console.log(school);
  let pays = useContext(paysContext);
  useEffect(() => {
    dispatch(getSchool());
    // dispatch(getSejour());
    // console.log(sejour);
  }, []);
  //console.log(match.params);
  pays = pays.filter((school) => school.langue[0] === match.params.id);
  //sejour = sejour.filter((sejour) => sejour.langue[0] === match.params.id);

  // console.log(sejour);

  return (
    <div>
      <div>
        <h2 style={{ marginTop: "20px" }}>
          {`Learn ${match.params.id} in  different countries :

`}
        </h2>
        <p
          style={{
            padding: "10px",
            fontFamily: "Arial",
          }}
        >
          Our team provide special educational opportunities to people of all
          ages to be a part of our several educational programs around the
          world. We offer a broad range of educational programs for people who
          want to improve their level in languages and live new cultural
          experiences and discover the world. It is never late to learn a new
          language and broaden your opportunities and knowledge with us! If you
          are ambitious and want to live a new cultural and touristic
          experience, you can join us from anywhere and at any time all year
          round! With us, you can build up new linguistic skills and guarantee
          your progress!
        </p>
      </div>
      <h1 className="pays">langue</h1>
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
                  text={`Learn ${el.langue} in the ${el.pays}`}
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
  );
};

export default Langue;
