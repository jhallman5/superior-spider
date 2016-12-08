function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
var users =[];

function createUser() {
  var userInBlock = document.getElementById("username");
  userInblock = new user(document.getElementByID(username),
                                document.getElementByID(email),
                                document.getElementByID(password)
                              );
  return users.push(userInBlock);
}
console.log(users);
