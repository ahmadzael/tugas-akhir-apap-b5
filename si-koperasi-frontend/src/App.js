import React, { Component } from 'react';
import logo from './logo.svg';
import CourseApp from './component/CourseApp'
//import Laporan from './component/Laporan'
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import {
  AnggotaContainer,
  Home,  
  Simpanan,
  Peminjaman,
  Laporan,
  Login
} from './containers'

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/laporan' component={Laporan} />
          <Route exact path='/simpanan' component={Simpanan} />
          <Route exact path='/pinjaman' component={Peminjaman} />

          {/* <Route exact path='/peminjaman' component={Peminjaman} /> */}
          {/* <Route exact path='/simpanan' component={Simpanan} /> */}
          <Route exact path='/anggota' component={AnggotaContainer} />
        </Switch>
      </Router>
    )
  }
}
export default App;
