import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserCard = ({ user }) => {

    const nav = useNavigate()

    const currentUserId = useSelector(
        (state) => state.users.value.currentUserId
    );

    function navigate(){
        if(currentUserId === user.id) return
        nav('/users/' + user.id)
    }

  return (
    <div className='user-card' onClick={navigate}>
        <img src={user.image} alt={user.username} />
        <h2>{user.username}</h2>
    </div>
  )
}

export default UserCard