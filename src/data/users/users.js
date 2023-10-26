const fs = require("fs");
const path = require("path");

/**************** Objeto de objetos de funciones genericas ***************/
/**************** Exportado y requerido en userService.js *************/

module.exports = {
  getUsers: function () {
    // filename: "./src/data/users/usersDataBase.json"
    //  const usuarios = JSON.parse(fs.readFileSync(this.filename, "utf-8"));;
    // esta es otra forma de hacer lo mismo

    const usersFilePath = path.join(__dirname, "./usersDataBase.json");
    const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8")); /* JSON.parse lo convierte en array */
    return users;
  },
  generateId: function(){
    const users = this.findAll()
    const lastUser = users.pop()
    if(lastUser){
      return lastUser.id + 1
    }
    return 1
  },

  saveUsers: function (users) {
    const usersFilePath = path.join(__dirname, "./usersDataBase.json");
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
  },

  findAll: function () {
    return this.getUsers();
  },

  findById: function (id) {
    const user = this.getUsers().find((user) => user.id == id);
    return user;
  },
  findByField: function(field, text){
    const user = this.getUsers().find(user=>user[field] === text) /* esto es otra forma de hacer user.field */
    return user
  },

  create: function (user) {
    const userInDb = this.findByField("email", user.email)
    if(userInDb){
      
    }

    const users = this.getUsers();
    const newUser = {
      ...user,
      id: this.generateId(),
      
    };
    users.push(newUser);
    this.saveUsers(users);
  },
  delete: function(id){
    const users = this.findAll()
    const nonDeletedUsers = users.filter(user=> user.id !== id)
    this.saveUsers(nonDeletedUsers)
  }
};