import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Message from '../components/Message';
import { findChatIndex, send } from '../features/users';

const ChatPage = () => {

    const dispatch = useDispatch()
    const ref = useRef()
    const nav = useNavigate()

    const { chatId } = useParams()
    const chats = useSelector(state => state.users.value.chats)
    const currentChat = chats.find(x => x.chatId === Number(chatId))
    const users = useSelector(state => state.users.value.users)
    const currentUserId = useSelector(state => state.users.value.currentUserId)
    const currentUser = users.find(x => x.id === currentUserId)
    const findIndex = chats.findIndex(x => x.chatId === Number(chatId))

    function sendMessage(){
        dispatch(findChatIndex(findIndex))

        const newMessage = {
            text: ref.current.value,
            sender: currentUser.username
        }

        dispatch(send(newMessage))
        ref.current.value = ''
    }

  return (
    <div className="chat d-flex flex-col">
      <div className="chat-top grow1 d-flex space-btw">
        <div className="d-flex align-center">
          <img
            src={
              currentUser.username === currentChat.user1.username
                ? currentChat.user2.image
                : currentChat.user1.image
            }
            alt=""
          />
          <h3>
            {currentUser.username === currentChat.user1.username
              ? currentChat.user2.username
              : currentChat.user1.username}
          </h3>
        </div>
        <button onClick={() => nav('/chats')}>Back to chats</button>
      </div>
      <div className="grow5 overflow">
        {chats[findIndex].messages.map((x, i) => (
          <Message key={i} item={x} />
        ))}
      </div>
      <div className="grow1 chat-top d-flex space-btw">
        <input
          ref={ref}
          className="grow5"
          type="text"
          placeholder="your message..."
        />
        <button onClick={sendMessage} className="grow1">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatPage