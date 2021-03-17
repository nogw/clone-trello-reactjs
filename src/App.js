import React from 'react';
import CardContainer from './components/CardsContainer';
import Navbar from './components/Navbar';
import Cards from './pages/Cards';
import GlobalStyle from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/b">
          <Cards />
        </Route>

        <Route path="/">
          <Login />  
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;