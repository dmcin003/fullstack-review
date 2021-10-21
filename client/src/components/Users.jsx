import React from 'react';
const _ = require('underscore');

const Users = (props)=>{
  return(
    <div>
      <h3>Users in DB</h3>
      <ul>
        {_.uniq(props.repos.map((repo)=>{
          return repo.repoOwner;
        })).map((user,id)=>{

          return <li key={id}><a href ={`${props.repos.repoOwnerUrl}`}>{user}</a></li>
        })

        }
      </ul>
    </div>
  )
}

export default Users;