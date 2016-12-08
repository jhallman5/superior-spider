function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
var users =[];

$(document).on("click", "#submit",function createUser() {
  var newUser;
  newUser = new user($("username").val(),
                         $("email").val(),
                         $("password").val()
                      );
  users.push(newUser);
  return users;
})
