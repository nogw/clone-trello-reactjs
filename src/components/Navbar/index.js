import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';

import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from '@material-ui/core/Avatar';

import { Container, IconButton, Title } from './styles';

function Navbar() {
  return (
    <Container>
      <IconButton>
        <AppsIcon/>
      </IconButton>

      <IconButton>
        <HomeIcon/>  
      </IconButton>

      <IconButton>
        <DashboardIcon/>  
      </IconButton>
      <IconButton>
        <SearchIcon/>
      </IconButton>

      <Title>
        <DashboardIcon/>  
        <h1>Trello-ReactJS</h1>
      </Title>

      <IconButton>
        <AddIcon/>
      </IconButton>
      
      <IconButton>
        <InfoIcon/>
      </IconButton>
      
      <IconButton>
        <NotificationsNoneIcon/>
      </IconButton>
      
      <Avatar className="Avatar">GA</Avatar>
    </Container>
  );
}

export default Navbar;