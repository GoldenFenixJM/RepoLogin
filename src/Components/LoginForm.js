import React, { useState, useEffect , useRef} from 'react'

export const LoginForm = () => {
  const [usuario, SetUsuario]=useState(undefined);
  const [password, SetPassword]=useState(undefined);

const onLogInFormSubmitted = (e) => {
    e.preventDefault();}
    

    const handleUsuarioChange= (e)=>
    {
      SetUsuario(e.target.value);
    }
    const handlePasswordChange= (e)=>
    {
      SetPassword(e.target.value);
    }

  return (
    <>
    <form onSubmit={onLogInFormSubmitted}>
      <label>Usuario</label>
      <input type="text" onChange={handleUsuarioChange} />
      <input type="password" onChange={handlePasswordChange} />
      <button type="submit">Login</button>
    </form>
    </>
  )
}

