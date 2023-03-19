import React from "react";
import Login from "./components/login";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FetchApi from './components/FetchAPI';

import Inputs from "./components/inputs";

function App() {
  
  



  return (
 
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inputdata" element={<Inputs />} />
          <Route path="/inputmydata" element={<Inputs />} />
        </Routes>
      </Router>
  
  );
}

export default App;
// <div className="form">
// <Inputs/>

// </div>

// </div>
