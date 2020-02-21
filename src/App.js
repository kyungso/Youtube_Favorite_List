import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Header from './components/Header';
import { HomePage, FavoriteListPage, VideoListPage } from './pages';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/list" exact component={FavoriteListPage} />
        <Route path="/list/:name" exact component={VideoListPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
}

export default App;
