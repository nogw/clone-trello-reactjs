import React, { useState } from 'react'

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  
  return (
    <Context.Provider value={[user, setUser]}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider