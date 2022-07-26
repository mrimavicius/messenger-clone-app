import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUsers } from '../features/users'

const ProfilePage = () => {

    const users = useSelector(state => state.users.value.users)
    const userId = useSelector(state => state.users.value.currentUserId)
    const user = users.find(x => x.id === userId)

    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const imageRef = useRef()
    const passwordRef = useRef()

    function changePic(id){
      const updatedUser = { ...user, image: imageRef.current.value };
      const usersCopy = [...users]
      const findIndex = users.findIndex(x => x.id === id)
      usersCopy[findIndex] = updatedUser

      dispatch(updateUsers(usersCopy))
      imageRef.current.value = ''
    }

    function changePw(id){
      const password = passwordRef.current.value

      if (password.length < 4) return setError("password is too short");
      if (password.length > 20) return setError("password is too long");

      if (password.toLowerCase() === password) return setError("password should include upper case letter");
      if (!/[^A-Za-z0-9]/.test(password)) return setError("password should include special symbol");

      setError('');

      const updatedUser = { ...user, password: passwordRef.current.value };
      const usersCopy = [...users];
      const findIndex = users.findIndex((x) => x.id === id);
      usersCopy[findIndex] = updatedUser;

      dispatch(updateUsers(usersCopy));
      passwordRef.current.value = "";
    }

  return (
    <div className="profile d-flex flex-col align-center">
      <img src={user.image} alt="" />
      <h2>{user.username}</h2>
      <div className="d-flex">
        <input
          ref={imageRef}
          type="text"
          placeholder="change profile picture"
        />
        <button onClick={() => changePic(user.id)}>Change</button>
      </div>
      <div className="d-flex">
        <input ref={passwordRef} type="text" placeholder="change password" />
        <button onClick={() => changePw(user.id)}>Change</button>
      </div>
      {error.length > 0 && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePage