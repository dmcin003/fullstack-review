const express = require('express');
const morgan = require('morgan');
const github = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  github.getReposByUsername(req.body)
    .then(({data})=>{
      console.log('This is my data: ', data);
      const promises = data.map((repo,i)=>{
        let repoData = {repoOwner: data[i].owner.login,forks: data[i].forks, url: data[i].html_url, repoOwnerUrl: data[i].owner.url};
        return db.save(repoData)

        });


      return Promise.all(promises);
    })
    .then((results)=>{
      console.log(results);
      res.status(200).end();
    })
    .catch((err)=>{
      res.status(500).send(err);

    });


});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.Repo.find({}).sort({forks:-1}).limit(25).exec((err,response)=>{
    if(err){

      res.status(500).send(err);
    }else{
      res.json(response);

    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

