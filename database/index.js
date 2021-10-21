const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!

  repoOwner: {type : String},
  forks: {type : Number},
  url: {type : String, unique: true},
  repoOwnerUrl: {type: String}
});

let Repo = mongoose.model('Repo', repoSchema);


let save = ({repoOwner,forks,url,repoOwnerUrl}) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let repo = new Repo({repoOwner: repoOwner, forks: forks, url : url, repoOwnerUrl: repoOwnerUrl});


  return repo.save();




}


module.exports.save = save;
module.exports.Repo = Repo;