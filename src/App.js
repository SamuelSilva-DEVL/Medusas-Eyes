import React from "react";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Home from './pages/Home'
import Uploade from './pages/Uploade'
import Team from'./pages/Team'
import About from './pages/About'
import Stepe from './pages/Step'
import DadosTable from './pages/Details'
import Teste from './pages/Teste'
import Teste2 from './pages/Testev2'


export default () => 
  <>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/uploade" component={Uploade}/>
        <Route path='/team' component={Team}/>
        <Route path='/about' component={About}/>
        <Route path='/step' component={Stepe}/>
        <Route path='/details' component={DadosTable}/>
        <Route path='/teste' component={Teste}/>
        <Route path='/teste2' component={Teste2}/>
      </Switch>
    </Router>
  </>
