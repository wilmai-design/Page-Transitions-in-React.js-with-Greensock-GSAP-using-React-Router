import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

//Pages
import About from './pages/about';
import Home from './pages/home';

const route = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About }
];

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Home />
      </Route>
    </div>
  );
}

export default App;
