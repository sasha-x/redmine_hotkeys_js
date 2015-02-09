$(document).ready(function(){
	//hotkeys
	
	//default base key combination for a bulk of hotkeys
	//may be ctrlKey, altKey, shiftKey
	var defaultKeys = ['ctrlKey', 'altKey'];
	
	$(document).bind('keydown', function(e){

		//active form submit
		//ctrl + enter
		if(e.ctrlKey && e.keyCode == 13){
			var form0 = $(':focus').closest('form');
			window.onbeforeunload = undefined;
		  	$(form0).submit();
		}
	  
		//new issue
		//ctrl + alt + n
		else if (ifKeysPressed(e, defaultKeys) && e.keyCode == 78){
			$("li>a.new-issue:not(.selected)").hrefRedirect();
		}

	  	//new subtask
		//ctrl + alt + m
	  	else if(ifKeysPressed(e, defaultKeys) && e.keyCode == 77){
	  		$('div.issue div#issue_tree>.contextual>a').hrefRedirect();
		}
		
		//edit issue
		//ctrl + alt + e
		else if (ifKeysPressed(e, defaultKeys) && e.keyCode == 69){
			if($("div#update")){
				$("div#update").show();
				$("textarea#issue_notes").focus();
			}
		}
		
		//issues list
		//ctrl + alt + i
		else if (ifKeysPressed(e, defaultKeys) && e.keyCode == 73){
			$("li>a.issues").hrefRedirect();
		}
		
		//wiki
		//ctrl + alt + w
		else if (ifKeysPressed(e, defaultKeys) && e.keyCode == 87){
			$("li>a.wiki").hrefRedirect();
		}
		
		//gantt
		//ctrl + alt + g
		else if (ifKeysPressed(e, defaultKeys) && e.keyCode == 71){
			$("li>a.gantt").hrefRedirect();
		}
		
		//for new hotkeys
		else if(ifKeysPressed(e, defaultKeys)){
		  	console.log(e);
		}
		
		
		//e.stopPropagation();
		
	});

});

function ifKeysPressed(event, keys){
	for(var i = 0; i < keys.length; i++){
		if(event[keys[i]] != true)
			return false;
	}
	return true;
}

;(function($) {
	//redirect page to href in current element
	$.fn.hrefRedirect = function() {
		var href = $(this).attr('href');
		if(href > ''){
			window.location.href = href;
		}
	};
})(jQuery);