import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouteUser = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  if (!isAuth) return <Redirect to="/sign-up" />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PrivateRouteUser;
