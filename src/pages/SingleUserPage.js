import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { createChat } from '../features/users'

const SingleUserPage = () => {

    const { id } = useParams()
    const nav = useNavigate()
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.value.users)
    const user = users.find(x => x.id === Number(id))
    const chats = useSelector(state => state.users.value.chats)
    const [error, setError] = useState('')

    const currentUserId = useSelector(state => state.users.value.currentUserId)
    const currentUser = users.find(x => x.id === currentUserId)

    function createNewChat(){
        if (
          chats.find(
            (x) =>
              (x.user1.username === currentUser.username ||
                x.user2.username === currentUser.username) &&
              (x.user1.username === user.username ||
                x.user2.username === user.username)
          )
        )
          return setError("you already have a chat with this user");
        setError('')

        const newChat = {
            chatId: Date.now(),
            user1: currentUser,
            user2: user,
            messages: []
        }

        dispatch(createChat(newChat))
        nav('/chat/' + newChat.chatId)
    }

  return (
    <div className="user-card-big d-flex">
      <img src={user.image} alt={user.username} />
      <div className="d-flex flex-col right-side">
        <h2>{user.username}</h2>
        <button onClick={createNewChat}>Send Message</button>
        {error.length > 0 && (
          <div className="error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleUserPage