import React from 'react';
import RepoTableRow from './RepoTableRow.jsx';


const RepoTable = (props) => (
  <div>
    <table>
      <thead>
      <tr>
        <th colSpan="2">Top 25 forked Repos in my DB</th>
      </tr>

      </thead>
      <tbody>
        <tr>
          <td><h4>Github handle</h4></td>
          <td><h4># of Forks</h4></td>
          <td><h4>URL link</h4></td>
        </tr>
        {props.repos.map((repo,id)=>{
          return <RepoTableRow repo ={repo} key={id}/>
        })}
      </tbody>
    </table>
  </div>
)

export default RepoTable;
