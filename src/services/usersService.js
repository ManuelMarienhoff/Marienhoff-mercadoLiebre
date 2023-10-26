const db = require("../data/db");

const userServices = {
  createUser: function (user) {
    // const userInDb = db.users.findByField("email", user.email)
    // if(userInDb){

    // }
    db.users.create(user);
  },
  findByField: function(field,text){
   const userToLogin =  db.users.findByField(field,text)
    if(userToLogin){
      return userToLogin
    } 
  }
};

module.exports = userServices;
