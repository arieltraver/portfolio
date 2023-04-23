import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
    <Navigation />
    <Routes>
      <Route exact path='/' component={About} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/skills' component={Skills} />
      <Route exact path='/Contact' component={Contact} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </main>
    </div>
  );
}

export default App;
