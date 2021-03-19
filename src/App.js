import React, { useContext } from 'react';
import Cards from './pages/Cards';
import GlobalStyle from './styles';
import LoginMenu from './components/LoginMenu';
import { Context } from './ContextProvider'

function App() {
  const [user, setUser] = useContext(Context);

  return (
    <>
      {
        user ? (
          <Cards />
        ) : (
          <LoginMenu />
        )
      } 
      <GlobalStyle/>
    </>
  )
}

export default App;