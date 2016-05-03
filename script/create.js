var forms = document.getElementsByTagName('form');
	for (var i = 0; i < forms.length; i++) {
	    forms[i].addEventListener('invalid', function(e) {
	        e.preventDefault();
	    }, true);
	}


var $title = $('#event-title');
	var $type = $('#event-type');
	var $host = $('#event-host');
	var $dateStart = $('#event-date-start');
	var $dateEnd = $('#event-date-end');
	var $guests = $('#event-guest');
	var $address = $('#address');
	var $message = $('#message');
	var error = true;

	var lSName = localStorage.getItem('name');
	var lSAddress = localStorage.getItem('address');

	if(lSName !== null){
		$host.val(lSName);
	}

	if(lSAddress !== null) {
		$address.val(lSAddress);
	}

	$title.on('blur keyup', function() {
		if($title.val().length === 0) {
			$title.next().text('Your Title Is Very Important! It is Required').show();
			error = true;
		} else {
			$title.next().hide();
			error = false;
		}
	});

	$type.on('blur keyup', function() {
		if($type.val().length === 0) {
			$type.next().text('Guests want to know, which event type it will be?').show();
			error = true;
		} else {
			$type.next().hide();
			error = false;
		}
	});

	$host.on('blur keyup', function() {
		if($host.val().length === 0) {
			$host.next().text('Everyone wants to know, who is hosting the event?').show();
			error = true;
		} else {
			$host.next().hide();
			error = false;
		}
	});

	$dateStart.on('blur keyup', function() {
		if($dateStart.val().length === 0) {
			$dateStart.next().text('Nobody will be there, if you don\'t tell them start date and time.').show();
			error = true;
		} else {
			$dateStart.next().hide();
			error = false;
		}
	});

	$dateEnd.on('blur keyup', function() {
		if($dateEnd.val().length === 0) {
			$dateEnd.next().text('Everyone has other important work to do! Fill the end date and time, so they come definitely.').show();
			error = true;
		} else if(
			($dateEnd.val().split('T')[0] < $dateStart.val().split('T')[0]) ||
			(($dateEnd.val().split('T')[0] >= $dateStart.val().split('T')[0]) &&
			($dateEnd.val().split('T')[1] < $dateStart.val().split('T')[1]))
			){
			$dateEnd.next().text('Guest can\'t travel to past. End date must be equal or greater than start date').show();
			error = true;
		} else {
			$dateEnd.next().hide();
			error = false;
		}
	});

	$guests.on('blur keyup', function() {
		if($guests.val().length === 0) {
			$guests.next().text('Guests want to know, If they allowed or not.').show();
			error = true;
		} else {
			$guests.next().hide();
			error = false;
		}
	});

	$address.on('blur keyup', function() {
		if($address.val().length === 0) {
			$address.next().text('I don\'t know where will event happen! Please provide.').show();
			error = true;
		} else {
			$address.next().hide();
			error = false;
		}
	});

	$('#create-event-form').submit(function() {
		if(!error) {
			localStorage.setItem('title', $title.val());
			localStorage.setItem('type', $type.val());
			localStorage.setItem('host', $host.val());
			localStorage.setItem('dateStart', $dateStart.val());
			localStorage.setItem('dateEnd', $dateEnd.val());
			localStorage.setItem('guests', $guests.val());
			localStorage.setItem('address', $address.val());
			localStorage.setItem('message', $message.val());
		}
	});
