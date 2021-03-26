import React from "react";
import { Switch, Route } from "react-router-dom";
import ListSejours from "../components/admin/ListSejours";
import ListSchool from "../components/admin/ListShcool";
import Login from "../components/admin/Login";
import LogOut from "../components/admin/LogOut";
import PrivateRoute from "../components/admin/PrivateRoute";
import Profile from "../components/admin/Profile";

import { useSelector } from "react-redux";
import AddSchool from "../components/admin/AddSchool";
import AddSejours from "../components/admin/AddSejours";
import EditSchool from "../components/admin/EditSchool";
import Navbar from "../components/admin/Navbar";
import "./Admin.css";
import EditSejour from "../components/admin/EditSejour";
const RouteAdmin = () => {
  const isAuth = useSelector((state) => state.adminReducer.isAuth);

  return (
    <div>
      {isAuth ? <LogOut /> : null}
      <Switch>
        <Route exact path="/admin" render={() => <Login />} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route exact path="/listSchool" render={() => <ListSchool />} />
        <Route exact path="/listSejours" render={() => <ListSejours />} />
        <Route exact path="/addSchool" render={() => <AddSchool />} />
        <Route exact path="/addSejours" render={() => <AddSejours />} />
        <Route exact path="/EditSchool:id" render={() => <EditSchool />} />
        <Route exact path="/EditSejour:id" render={() => <EditSejour />} />
      </Switch>
    </div>
  );
};

export default RouteAdmin;
