import React, { Component } from 'react';
import MuiThemePorvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/Navbar';
import Search from './components/search/Search';
import './App.css';

class App extends Component {
  render(){
  return (
    <MuiThemePorvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemePorvider>
  );
 }
}

export default App;
