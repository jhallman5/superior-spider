// require.config({
//   paths: {
//     jquery: '../jquery-3.1.1.min', '../signupplan2.js'
//   }
// })

// var {users} = require('signup.html');


//var list_of_users = users;
var users1 = localStorage.getItem(users);
var loggedInUser2 = localStorage.getItem(loggedInUser);

require(['jquery-3.1.1.min.js'], function(){


for(let i = 0; i < users1.length; i++) {
   if(users1[i].username === loggedInUser2.username)

 $('#displayed-name').text(users1[0].username);
 }



 // module.exports ={users,
 //               loggedInUser};

 });