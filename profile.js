require.config({
  paths: {
    jquery: '../jquery-3.1.1.min', 'signupplan2.js'
  }
})

// var {users} = require('signup.html');
// var {loggedInUser} = require('signup.html');

require(['jquery-3.1.1.min.js'], function(){

for(let i = 0; i < users.length; i++) {
   if(users[i].username === loggedInUser.username)

 $('#displayed-name').text(users[i].username)
 }






 // module.exports ={users,
 //               loggedInUser};

 });