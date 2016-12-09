require.config({
  paths: {
    jquery: '../jquery-3.1.1.min'
  }
})

var users = users ? users : []; //if users array is not empty, users keep the value the same. If users is undefined, it becomes an empty array.
//var users = users.username;
var loggedInUser;

require(['jquery-3.1.1.min.js', ], function(){

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}


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



 });