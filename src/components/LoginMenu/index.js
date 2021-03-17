import React, { useState } from 'react';
import { Container, LoginContainer } from './styles';
import { CSSTransition } from 'react-transition-group';

function LoginMenu() {
  const [MenuNow, setMenuNow] = useState('login')
  
  const handleLogin = e => {
    e.preventDefault()
  }

  const handleRegister = () => {

  }


  return (
    <Container>
      <CSSTransition 
        in={MenuNow === 'login'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
      >
        <LoginContainer>
          <p>Log in to Trello</p>
          <form onSubmit={ e => handleLogin(e) }>
            <input type="text" required placeholder="Enter email" />
            <input type="text" required placeholder="Enter password" />
            <button>Log in</button>
          </form>
          <a onClick={() => setMenuNow('register')}>Sign up for an account</a>
        </LoginContainer>
      </CSSTransition>

      <CSSTransition 
        in={MenuNow === 'register'}
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary"
      >
        <LoginContainer>
          <p>Register in Trello</p>
          <form>
            <input type="text" placeholder="Enter Name" />
            <input type="text" placeholder="Enter Email" />
            <input type="text" placeholder="Enter password" />
            <input type="text" placeholder="Confirm password" />
            <button>Register</button>
          </form>
          <a onClick={() => setMenuNow('login')}>Already have an account? Log In</a>
        </LoginContainer>
      </CSSTransition>
    </Container>
  );
}

export default LoginMenu;