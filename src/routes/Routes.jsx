import React from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Login from "../pages/Login";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/damforher" exact component={Home} />
        <Route path="/catalog/:slug" component={Product} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};
