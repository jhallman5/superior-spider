
var users = [];
var user1 = {username: 1, password: 1}
users.push(user1);


require(['jquery-3.1.1.min.js'], function(){

$('#auth').on('click', function(){

var usernameemail = $("#username-email").val();
var passwordauth = $("#password-auth").val();


for(let i = 0; i < users.length; i++){
		if ((usernameemail == users[i].username || users[i].email) && (passwordauth==users[i].password)){
			window.location.href="profile.html";
		}else {
		
		alert ("Who do you think you are?");
	}
	}

})
	

})

