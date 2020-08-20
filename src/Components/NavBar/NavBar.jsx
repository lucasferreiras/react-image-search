import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            PixaBay Image Finder
          </Typography>
        </Toolbar>
      </AppBar>    
      </div>
  );
}

export default NavBar;