/* eslint-disable react/prop-types */
// import React from 'react'

const UserContainer = (props) => {
  return (
    <div>
        <h3>{props.title}</h3>
        {props.users.map((user) => (
            <div key={user.id}>{user.name}</div>
        ))}
    </div>
  )
}

export default UserContainer

