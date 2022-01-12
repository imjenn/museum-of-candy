import React from 'react';
import Navbar from './components/Navbar';
import Index from './components/Index';
import About from './components/About';
import Footer from './components/Footer';
import Tickets from './components/Tickets';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Switch>
        <Route exact path="/">
          <Index />
          <Footer />
        </Route>
        <Route path="/about">
          <About />
          <Footer />
        </Route>
        <Route path="/tickets">
          <Tickets />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
