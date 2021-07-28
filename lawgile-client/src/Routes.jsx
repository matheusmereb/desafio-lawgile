import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from './components/Landing'
import Showcase from './components/Showcase'
import Carrinho from './components/Carrinho'

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path='/showcase' component={Showcase} />
        <Route path='/cart' component={Carrinho} />
        <Route exact path="/pedidos/new" component={Carrinho} />
    </Switch>
  );
}
