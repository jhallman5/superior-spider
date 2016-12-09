// require.config({
//   paths: {
//     jquery: '../jquery-3.1.1.min', '../signupplan2.js'
//   }
// })

// var {users} = require('signup.html');


//var list_of_users = users;

require(['jquery-3.1.1.min.js', 'signupplan2.js'], function(){


for(let i = 0; i < users.length; i++) {
   if(users[i].username === loggedInUser.username)

 $('#displayed-name').text(users[i].username);
 }



 // module.exports ={users,
 //               loggedInUser};

 });