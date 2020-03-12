import React from 'react';
import './App.css';
import Header from '../Header/Header';
import StartPage from "../StartPage/StartPage"
import {
  BrowserRouter,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import ErrorBoundary from "../Errorboundry/errorboundry";
import CategoryPage from '../CategoryPage/CategoryPage';
import FavouritePage from '../FavouritePage/FavouritePage';



function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/category/:color">
              <CategoryPage/>
            </Route>
            <Route path="/favourites/">
              <FavouritePage />
            </Route>
            <Route path="/">
              <StartPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
