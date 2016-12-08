function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
var users =[];

function createUser() {
  var usersInBlock = users;
  var userInBlock = document.getElementById("username");

  userInBlock = new user(document.getElementByID(username),
                                document.getElementByID(email),
                                document.getElementByID(password)
                              );
  usersInBlock.push(userInBlock);
  users = usersInBlock;
  return users;
}
console.log(users);
