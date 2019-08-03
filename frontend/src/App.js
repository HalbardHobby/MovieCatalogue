import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/layout/Header';
import MovieList from './components/content/MovieList';

import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={MovieList}/>
    </Router>
  );
}

export default App;
