import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoTable from './components/RepoTable.jsx';
import Users from './components/Users.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }


    this.getRepos = this.getRepos.bind(this);

  }
  componentDidMount(){
    this.getRepos();
  }

  getRepos(){
    console.log('get');
    axios.get('/repos')
    .then(({data})=>{
      console.log('Axios.get request :',data);
      this.setState({repos: data});

      })
      .catch((err)=>{
        console.log(err);
      });
    }




  search (term) {
    console.log(`${term} was searched`);
    let handle = {name:term};
    axios.post('/repos',handle)
      .then((response)=>{
        console.log('Searches :',response);

        this.getRepos();
      })
      .catch((err)=>{
        console.log(err);
      })


  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Users repos={this.state.repos}/>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)} getRepos={this.getRepos.bind(this)}/>
      <RepoTable repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));