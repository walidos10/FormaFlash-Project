import React from "react";
import "../Cards.css";
import CardItemMap from "./CardItemMap";
import { useState } from "react";

function CardsMap(props) {
  const array = [
    {
      src: "images/img-9.jpg",
      text: "Learn English in the UK",
      label: "Adventure",
      path: "/pays",
    },
    {
      src: "images/img-2.jpg",
      text: "Learn English in the USA",
      label: "Luxury",
      path: "/pays",
    },
    {
      src: "images/img-3.jpg",
      text: "Learn English in Canada",
      label: "Mystery",
      path: "/pays",
    },
    {
      src: "images/img-4.jpg",
      text: "Learn English in Australia",
      label: "Adventure",
      path: "/pays",
    },
  ];
  const [state, setstate] = useState(array);
  console.log(state);
  return (
    <div className="cards">
      <h1>{props.title}</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {state.map((el, i) => {
              <CardItemMap el={el} />;
            })}
          </ul>
          {/* <CardItem
              src="images/img-9.jpg"
              text="Learn English in the UK"
              label="Adventure"
              path="/pays"
            />
            {}
            <CardItem
              src="images/img-2.jpg"
              text="Learn English in the USA"
              label="Luxury"
              path="/pays"
            />

            <CardItem
              src="images/img-3.jpg"
              text="Learn English in Canada"
              label="Mystery"
              path="/pays"
            />

            {
              <CardItem
                src="images/img-4.jpg"
                text="Learn English in Australia"
                label="Adventure"
                path="/pays"
              />
            }
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/img-8.jpg"
              text="Learn English in Ireland
"
              label="Adrenaline"
              path="/pays"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Learn English in New Zealand
"
              label="Adrenaline"
              path="/pays"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Learn Spanish in Spain

"
              label="Adrenaline"
              path="/pays"
            />
          </ul>*/}
        </div>
      </div>
    </div>
  );
}

export default CardsMap;
