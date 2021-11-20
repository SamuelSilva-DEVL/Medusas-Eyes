import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Uploade from './pages/Uploade'
import Team from './pages/Team'
import About from './pages/About'
import Stepe from './pages/Step'
import Detalhes from './pages/Details'
import Teste from './pages/Teste'
import Multi from './pages/Multiple'
import Teste2 from './pages/Testev2'
import ImgAnalysis from './pages/ImgAnalises'
import Table from './components/Table/index'
import Img from './pages/Img'

export default () => (
  <>
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/uploade" component={Uploade} />
        <Route path="/team" component={Team} />
        <Route path="/about" component={About} />
        <Route path="/step" component={Stepe} />
        <Route path="/details" component={Detalhes} />
        <Route path="/teste" component={Teste} />
        <Route path="/multi" component={Multi} />
        <Route path="/testev2" component={Teste2} />
        <Route path="/imganl" component={ImgAnalysis} />
        <Route path="/index" component={Table} />
        <Route path="/img" component={Img} />
      </Switch>
    </Router>
  </>
)
