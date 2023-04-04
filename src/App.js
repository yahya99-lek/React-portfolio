import React from 'react'
import "./App.css"
import Header from "./components/home/header/Header"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import HomePage from './components/pageContent/HomePage';
import Footer from './components/home/Footer';

function App() {
  return (
      <Router>
      <Header />
      <Switch>
        <Route path='/'exact component={HomePage}/>
      </Switch>
      <Footer />
      </Router>
    
  )
}

export default App