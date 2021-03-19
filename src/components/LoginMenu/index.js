import React, { useState, useEffect, useContext } from 'react';
import { Container, LoginContainer, Form, Button } from './styles';
import { CSSTransition } from 'react-transition-group';
import { auth } from '../../firebase'
import { SettingsBluetoothSharp } from '@material-ui/icons';
import { Context } from '../../ContextProvider';

function LoginMenu() {
  const [MenuNow, setMenuNow] = useState('login')
  const [user, setUser] = useContext(Context);

  const initializeValue = [
    {
      email: "",
      password: "",
      emailRegister: "",
      passwordRegister: "",
      password2Register: "",
    }
  ]

  const [inputs, setInputs] = useState(initializeValue)

  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(inputs.email, inputs.password)
    .then((user) => {
      setUser(user)
    })
    .catch((err) => {
      console.log(err)
    }
  )
  }  

  const handleRegister = () => {
    if (inputs.passwordToReg === inputs.password2ToReg) {
      auth
        .createUserWithEmailAndPassword(inputs.emailToReg, inputs.passwordToReg)
        .catch((err) => {
          console.log(err)
        }
      )
    }
  }

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser("")
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  const handleSubmit2Login = (e) => {
    e.preventDefault()
    handleLogin()
  }

  const handleSubmit2Register = (e) => {
    e.preventDefault()
    handleLogin()
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
            <Form onSubmit={handleSubmit2Login}>
              <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
              <input onChange={handleChange} type="password" name="password" placeholder='password' value={inputs.password} />
              <button>Log in</button>
            </Form>
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
            <Form onSubmit={handleSubmit2Register}>
            <input onChange={handleChange} name="emailRegister" placeholder='Enter email' value={inputs.emailRegister} />
              <input onChange={handleChange} name="passwordRegister" placeholder='Enter password' value={inputs.passwordRegister} />
              <input onChange={handleChange} name="password2Register" placeholder='Confirm password' value={inputs.password2Register} />
              <button>Register</button>
            </Form>
          <a onClick={() => setMenuNow('login')}>Already have an account? Log In</a>
        </LoginContainer>
      </CSSTransition>
    </Container>
  );
}

export default LoginMenu;