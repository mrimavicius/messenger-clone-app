import React from 'react'
import { useSelector } from 'react-redux';

const Message = ({ item }) => {

    const users = useSelector((state) => state.users.value.users);
    const currentUserId = useSelector(
        (state) => state.users.value.currentUserId
    );
    const currentUser = users.find((x) => x.id === currentUserId);

  return (
    <div>
        {item.sender === currentUser.username ? 
            <div className='d-flex flex-end'>
                <div className='message-text my-msg'>{item.text}</div>
            </div> :
            <div className='d-flex'>
                <div className='message-text'>{item.text}</div>
            </div> 
        
    }
    </div>
  )
}

export default Message