import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Start from '../containers/Start';
import BoardGame from '../components/BoardGame';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route exact path='/game' component={BoardGame} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
