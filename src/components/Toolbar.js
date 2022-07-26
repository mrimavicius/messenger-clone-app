import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeStatus } from '../features/users'

const Toolbar = () => {

    const dispatch = useDispatch()
    const chats = useSelector((state) => state.users.value.chats);
    const users = useSelector((state) => state.users.value.users);
    const currentUserId = useSelector(
      (state) => state.users.value.currentUserId
    );
    const currentUser = users.find((x) => x.id === currentUserId);
    const myChats = chats.filter(
          (x) =>
            x.user1.username === currentUser.username ||
            x.user2.username === currentUser.username
        );

  return (
    <div className='toolbar d-flex space-btw'>
        <div>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/users'}>All Users</Link>
            <Link to={'/chats'}>Chats ({myChats.length})</Link>
        </div>
        <div>
            <Link onClick={() => dispatch(changeStatus(false))} to={'/'}>Log out</Link>
        </div>
    </div>
  )
}

export default Toolbar