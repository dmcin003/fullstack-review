import React from 'react';


const RepoTableRow = (props) => (
  <tr>
    <td>{props.repo.repoOwner}</td>
    <td>{props.repo.forks}</td>
    <td><a href ={`${props.repo.url}`}>{props.repo.url}</a></td>
  </tr>
)

export default RepoTableRow;