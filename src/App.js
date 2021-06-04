import React from "react";
import "./App.css"
import Footer from "./pages/Footer/Footer";


import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Service/Services";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/service" exact>
            <Services />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>


    <Footer/>
    </>

    
  );
};

export default App;
