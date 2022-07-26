import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateChats } from '../features/users'

const UserChatsPage = () => {

    const nav = useNavigate()
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.value.users)
    const chats = useSelector(state => state.users.value.chats)
    const currentUserId = useSelector(state => state.users.value.currentUserId)
    const currentUser = users.find(x => x.id === currentUserId)

    const myChats = chats.filter(x => x.user1.username === currentUser.username || x.user2.username === currentUser.username)

    function deleteChat(id){
        let conf = window.confirm('Do you really want to delete this chat?')
        if(conf === false) return

        const chatsLeft = chats.filter(x => x.chatId !== id)
        dispatch(updateChats(chatsLeft))
    }

  return (
    <div>
      {myChats.map((x, i) => (
        <div
          key={i}
          className="chat-card d-flex space-btw align-center"
        >
          <div
            onClick={() => nav("/chat/" + x.chatId)}
             className="d-flex align-center grow1"
          >
            <img
              src={
                currentUser.username === x.user1.username
                  ? x.user2.image
                  : x.user1.image
              }
              alt=""
            />
            <h2>
              {currentUser.username === x.user1.username
                ? x.user2.username
                : x.user1.username}
            </h2>
          </div>
          <i onClick={() => deleteChat(x.chatId)} className="fa-solid fa-x"></i>
        </div>
      ))}
    </div>
  );
}

export default UserChatsPage