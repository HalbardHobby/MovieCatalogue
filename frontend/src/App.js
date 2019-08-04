import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/layout/Header';
import MovieList from './components/content/MovieList';
import MovieDetail from './components/content/MovieDetail';

import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/detail/' component={MovieDetail} />
        <Route path='/:genre' component={MovieList} />
      </Switch>
    </Router>
  );
}

export default App;
