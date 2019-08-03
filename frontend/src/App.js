import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/layout/Header';

import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
