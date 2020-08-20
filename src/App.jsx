import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import NavBar from './Components/NavBar/NavBar'
import Search from './Components/Search/Search'

import './App.css';


function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
