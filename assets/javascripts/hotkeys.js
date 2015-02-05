$(document).ready(function(){
	//hotkeys
	
	$(document).bind('keydown', function(e) {
		//active form submit
		//ctrl + enter
		if(e.ctrlKey && e.keyCode == 13){
			var form0 = $(':focus').closest('form');
			window.onbeforeunload = undefined;
		  	$(form0).submit();
		}
	  
		//new issue
		//ctrl + alt + n
		else if (e.ctrlKey && e.altKey && e.keyCode == 78) {
			var href = $("li>a.new-issue:not(.selected)").attr('href');
			if(href > ''){
				window.location.href = href;
			}
		}

	  	//new subtask
		//ctrl + alt + m
	  	else if(e.ctrlKey && e.altKey && e.keyCode == 77){
	  		var href = $('div.issue div#issue_tree>.contextual>a').attr('href');
		  	if(href){
			  	window.location.href = href;
		  	}
		}
		
		//edit issue
		//ctrl + alt + e
		else if (e.ctrlKey && e.altKey && e.keyCode == 69) {
			if($("div#update")){
				$("div#update").show();
				$("textarea#issue_notes").focus();
			}
		}
		
		//for new hotkeys
		else if(e.ctrlKey && e.altKey){
		  	console.log(e);
		}
	});

});