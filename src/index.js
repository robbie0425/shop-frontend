import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Login/register";
import Shop from "./components/Shop";
import Lipstick from "./components/Shop/lipstick";
import Perfume from "./components/Shop/perfume";
import Mask from "./components/Shop/mask";
import Cart from "./components/Shop/cart";
import Wishlist from "./components/Shop/wishlist";
import Account from "./components/Shop/account";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/"><Shop /></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/lipstick" component={Lipstick}></Route>
        <Route path="/perfume" component={Perfume}></Route>
        <Route path="/mask" component={Mask}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/wishlist" component={Wishlist}></Route>
        <Route path="/account" component={Account}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

