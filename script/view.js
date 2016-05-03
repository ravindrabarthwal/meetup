	var lStitle = localStorage.getItem('title');
	if(lStitle !== null) {
		var lStype = localStorage.getItem('type');
		var lShost= localStorage.getItem('host');
		var lSdateStart = localStorage.getItem('dateStart').replace("T", " ");
		var lSdateEnd = localStorage.getItem('dateEnd').replace("T", " ");
		var lSguests = localStorage.getItem('guests');
		var lSaddress = localStorage.getItem('address');
		var lSmessage = localStorage.getItem('message') !== null ? localStorage.getItem('message') : "No message provided by the host";

		$('.title').text(lStitle);
		$('#type').text(lStype);
		$('#host').text(lShost);
		$('#date-start').text(lSdateStart);
		$('#date-end').text(lSdateEnd);
		$('#address').text(lSaddress);
		$('#message').text(lSmessage);
		var guestList = lSguests.split(',');
		guestList.forEach(function(val) {
			$dd = $("<dd>"+val+"</dd>");
			$(guests).append($dd);
		});
	}else {
		$('.info-panel').hide();
		$('.title').text('Sorry! There is No Event!');
	}
