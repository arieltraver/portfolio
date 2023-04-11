import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <main>
    <Navigation />
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/skills' component={Skills} />
      <Route exact path='/Contact' component={Contact} />
      <Route path="*" element={<PageNotFound />} />
    </Switch>
  </main>
);

export default App;
