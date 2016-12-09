var {jQuery} = require('jquery-3.1.1.min.js');

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
var users =[];
var loggedInUser;

$('#submit').on('click',function createUser() {
  var newUser;
  var username = $("#username").val();
  var email = $("#email").val();
  var password = $("#username").val();
  newUser = new User(username, email, password);
  users.push(newUser);
  loggedInUser = newUser;
  return users;
})

module.exports ={users,
                loggedInUser};
