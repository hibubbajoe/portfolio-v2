import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import PortfolioPage from './components/PortfolioPage';
import './App.css';
import './styles/landing-page.css';
import './styles/revealer-nav.css';
import './styles/portfolio-page.css';
import './styles/contact-page.css';
import './styles/about-page.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/contact'>
          <ContactPage />
        </Route>
        <Route path='/portfolio'>
          <PortfolioPage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
        <Route path='/'>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;