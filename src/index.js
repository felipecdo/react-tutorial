import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';

import TicTacToe from "./tictactoe";
import Menu from "./menu";
import NavBar from "./components/navbar";

 const rootElement = document.getElementById("root");
 ReactDOM.render(
   <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/"> 
        <Redirect to="/menu" />
      </Route>
      <Route path="/menu" component={Menu} />
      <Route path="/tictactoe" component={TicTacToe} />
    </Switch>
   </BrowserRouter>,
   rootElement
 );