var $name = $('#name');
	var $email = $('#email');
	var $password = $('#password');
	var $role = $('#role');
	var error = true;

	$name.on('blur',function() {
		if($name.val().length === 0){
			$name.next().text('Hey! Name is Required.').show();
			error = true;
		}
		else {
			$name.next().hide();
			error = false;
		}
	});

	$email.on('blur', function() {
		var emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

		if($email.val().length === 0){
			$email.next().text('We need your email. Seriously!').show();
			error = true;
		}
		else if(!emailPattern.test($email.val())){
			$email.next().text('You need a valid email address').show();
			error = true;
		}
		else {
			$email.next().hide();
			error = false;
		}
	});

	$password.on('keyup blur', function() {
		var message = [];
		var ucasePattern = /[A-Z]/;
		var lcasePattern = /[a-z]/;
		var specialPattern = /[^a-zA-Z0-9\-\/]/;

		if($password.val().length < 8){
			message[0] = "Password should have atleast 8 char long ";
			error = true;
		}else {
			message[0] = "";
			error = false;
		}

		if(!ucasePattern.test($password.val())) {
			message[1] = "Atleast 1 uppercase ";
			error = true;
		}else {
			message[1] = "";
			error = false;
		}

		if(!lcasePattern.test($password.val())) {
			message[2] = "Atleast 1 lowercase ";
			error = true;
		}else {
			message[2] = "";
			error = false;
		}

		if(!specialPattern.test($password.val())) {
			message[2] = "Atleast 1 special character ";
			error = true;
		}else {
			message[2] = "";
			error = false;
		}

		if(message[0].length > 0 || message[1].length > 0 || message[2].length > 0){
			$password.next().text(message.toString().replace(",", " ")).show();
		}else{
			$password.next().hide();
		}
	});

	$('#reg-form').submit(function(e) {
		if(!error) {
			localStorage.setItem('name', $name.val());
			localStorage.setItem('email', $email.val());
			localStorage.setItem('role', $role.val());
		}
	});