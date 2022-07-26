import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addUser } from '../features/users';

const SignUpPage = () => {

  const nav = useNavigate()
  const dispatch = useDispatch()

  const usernameRef = useRef()
  const passwordRef = useRef()
  const password2Ref = useRef()

  const [error, setError] = useState('')

  const users = useSelector(state => state.users.value.users)

  function validation(){
      const username = usernameRef.current.value;
      const password = passwordRef.current.value;
      const password2 = password2Ref.current.value;

      if(username.length < 4) return setError('username is too short')
      if(username.length > 20) return setError('username is too long')
      if(users.find(x => x.username === username)) return setError('this username is already taken')

      if(password.length < 4) return setError('password is too short')
      if(password.length > 20) return setError('password is too long')
      if(password !== password2) return setError('passwords do not match')

      if(password.toLowerCase() === password) return setError('password should include upper case letter')
      if (!/[^A-Za-z0-9]/.test(password)) return setError("password should include special symbol");

      setError('')
  }

    function createUser(){
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        const newUser = {
          id: Date.now(),
          username: username,
          password: password,
          image: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg",
          chats: []
        };

        if(username.length === 0) return
        if(error.length > 0) return

        dispatch(addUser(newUser))
        nav('/')
    }

  return (
    <>
      <div className="form d-flex flex-col">
        <input
          onChange={validation}
          ref={usernameRef}
          type="text"
          placeholder="username"
        />
        <input onChange={validation} ref={passwordRef} type="password" placeholder="password" />
        <input onChange={validation} ref={password2Ref} type="password" placeholder="repeat password" />
        {error.length > 0 && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
        <button onClick={createUser}>Sign up</button>
      </div>
      <div className="form-ext">
        <p>
          Already have an account? <Link to={"/"}>Log in</Link>{" "}
        </p>
      </div>
    </>
  );
}

export default SignUpPage