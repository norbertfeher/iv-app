import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import HomePage from "./components/Homepage";
import MovieDatasheet from "./components/MovieDatasheet";
import {ApicallProvider} from "./context/ApicallContext";
import SearchPage from "./components/SearchPage";


function App() {
  return (
      <ApicallProvider>
          <div className="container header">
            <Link to="/" className="btn btn-success header__link"> Home </Link>
            <Link to="/search" className="btn btn-success header__link"> Search </Link>
          </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/video/:id" component={MovieDatasheet} />
            <Route exact path="/search" component={SearchPage} />
        </Switch>
      </ApicallProvider>
  )

}

export default App;
