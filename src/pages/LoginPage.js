import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { changeStatus, updateCurrentUserId } from '../features/users'

const LoginPage = () => {

  
  const nav = useNavigate()
  const dispatch = useDispatch()

  const usernameRef = useRef()
  const passwordRef = useRef()


  const [error, setError] = useState('')

  const users = useSelector(state => state.users.value.users)

  function login(){
    const currentUser = users.find((x) => x.username === usernameRef.current.value);

    if(!currentUser) return setError('this username does not exist')
    if(currentUser.password !== passwordRef.current.value) return setError('wrong password')

    setError('')

    dispatch(updateCurrentUserId(currentUser.id))
    dispatch(changeStatus(true))
    nav('/profile')
  }

  return (
    <>
      <div className="form d-flex flex-col">
        <h2>All the coolest uses this app!</h2>
        <input ref={usernameRef} type="text" placeholder="username" />
        <input ref={passwordRef} type="password" placeholder="password" />
        {error.length > 0 && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        <button onClick={login}>Log in</button>
      </div>
      <div className="form-ext">
        <p>
          Don't have an account? <Link to={"/signup"}>Sign up</Link>{" "}
        </p>
      </div>
    </>
  );
}

export default LoginPage