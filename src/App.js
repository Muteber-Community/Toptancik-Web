import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import ProductPage from './components/ProductPage';
import Admin from './components/Admin';
import AboutPage from './components/AboutPage/About';

window.history.pushState(
  '',
  document.title,
  window.location.pathname + window.location.search
);

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/products' component={ProductPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/adminpanel' component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
