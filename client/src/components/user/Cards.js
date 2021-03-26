import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

import { useState } from "react";

function Cards(props) {
  const [state, setstate] = useState(props.school);

  /*  const dispatch = useDispatch();
  const school = useSelector((state) => state.adminReducer.school);
  console.log(school);
  let history = useHistory();

  useEffect(() => {
    dispatch(getSchool());
    //  console.log(school[0].pays);
    history.push(school);
  }, [history]);
*/
  console.log(state);
  return (
    <div className="cards">
      <h1>{props.title}</h1>
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
            {state.map((el, i) => {
              return (
                <CardItem
                  src="images/img-9.jpg"
                  text="Learn English in the UK"
                  label={el.langue}
                  path="{school[0].langue[0]}"
                />
              );
            })}

            {}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
