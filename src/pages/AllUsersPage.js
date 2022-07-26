import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from '../components/UserCard'

const AllUsers = () => {

  const users = useSelector(state => state.users.value.users)

  return (
    <div className='d-flex flex-wrap'>
      {users.map((x, i) => (
        <UserCard key={x.id} user={x} />
      ))}
    </div>
  )
}

export default AllUsers