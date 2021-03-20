import React, { useContext, useEffect } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';

import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from '@material-ui/core/Avatar';

import { Context } from '../../ContextProvider';
import { Container, IconButton, Title } from './styles';
import { auth } from '../../firebase'

function Navbar() {
  const [user, setUser] = useContext(Context);
  const userName = user.email.substring(0, 2)

  useEffect(() => {
    console.log(user)
  }, []) 

  const handleLogout = () => {
    auth.signOut()
  }

  return (
    <Container>
      <IconButton onClick={() => handleLogout()}>
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
      
      <Avatar className="Avatar">{userName}</Avatar>
    </Container>
  );
}

export default Navbar;