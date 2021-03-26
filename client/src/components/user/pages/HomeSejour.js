import { useEffect, useContext } from "react";
import Langue from "./Langue";
import Pays from "./Pays";
import { paysContext } from "../../../App";
import CardItem from "../CardItem";

const HomeSejour = () => {
  let pays = useContext(paysContext);

  return (
    <div>
      <h1>sejour home description</h1>
    </div>
  );
};

export default HomeSejour;
