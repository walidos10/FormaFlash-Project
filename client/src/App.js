import React from "react";
import Navbar from "./components/user/Navbar";
import "./App.css";

import Home from "./components/user/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/user/pages/SignUp";
//import "./components/admin/login.css";
import RouteAdmin from "./route/RouteAdmin";
import Contact from "./components/user/pages/Contact";
import Devis from "./components/user/pages/Devis";

import Brochures from "./components/user/pages/Borchures";
import Pays from "./components/user/pages/Pays";
import Langue from "./components/user/pages/Langue";
import Ville from "./components/user/pages/Ville";
import Loginuser from "./components/user/pages/Loginuser";
import ProfileUser from "./components/user/pages/ProfileUser";
import PrivateRouteUser from "./components/user/PrivateRouteUser";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSchool, getSejour } from "./JS/actions/admin";
import Upload from "./components/user/pages/Upload";
import HomeSejour from "./components/user/pages/HomeSejour";
//import { getSchool } from "../../JS/actions/admin";

export const paysContext = React.createContext();
export const langueContext = React.createContext();
export const villeContext = React.createContext();

function App() {
  const dispatch = useDispatch();
  let school = useSelector((state) => state.adminReducer.school);
  let sejour = useSelector((state) => state.userReducer.sejour);
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [...item[key], item])).values()];
  }
  const pays = getUniqueListBy(school, "pays");
  const langue = getUniqueListBy(school, "langue");
  const ville = getUniqueListBy(school, "ville");

  console.log(school);

  useEffect(() => {
    // dispatch(getSchool());
    dispatch(getSejour());

    console.log(sejour);
  }, []);
  return (
    <div>
      <paysContext.Provider value={pays}>
        <villeContext.Provider value={ville}>
          <langueContext.Provider value={langue}>
            <Router>
              <Navbar />
              <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/brochures" exact component={Brochures} />

                <Route path="/contact" component={Contact} />
                <Route path="/devis" component={Devis} />
                <Route path="/sign-up" render={() => <SignUp />} />
                <PrivateRouteUser path="/profileUser" component={ProfileUser} />

                <Route path="/pays/:id" component={Pays} />
                <Route path="/langue/:id" component={Langue} />
                <Route path="/ville/:id" component={Ville} />
                <Route path="/upload" component={Upload} />
                <RouteAdmin />
              </Switch>
            </Router>
          </langueContext.Provider>
        </villeContext.Provider>
      </paysContext.Provider>
    </div>
  );
}

export default App;
