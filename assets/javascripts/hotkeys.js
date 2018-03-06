/**
 *  Redmine Hotkeys Plugin
 *  Add some hotkeys for common actions: 
 *  * ctrl + enter form submit
 *  * project tabs switching
 *  * issue status changes
 */
(function()
{
    
    function submitActiveForm()
    {
        var form0 = $(':focus').closest('form');
        window.onbeforeunload = undefined;
        $(form0).submit();
    }

    function ifKeysPressed(event, keys)
    {
        for(var i = 0; i < keys.length; i++){
            if(event[keys[i]] != true)
                return false;
        }
        return true;
    }

    function noFormat(str)
    {
        return str;
    }

    
    //redirect page to href in current element
    $.fn.hrefRedirect = function()
    {
        var href = $(this).attr('href');
        if(href > ''){
            window.location.href = href;
        }
    };

    var HK = {
        bindCommonKeys : function (commonKeys, issueKeys, issueStatusMap)
        {
            $(document).bind('keydown', function(e){

                //active form submit
                //ctrl + enter
                if(e.ctrlKey && e.keyCode == 13){
                    submitActiveForm();
                }
              
                //project tabs switching section
                else if (ifKeysPressed(e, commonKeys)){
                    var fired = 1;
                    switch(String.fromCharCode(e.which).toLowerCase()){
                        //new issue
                        case 'n':
                            $("a.new-issue:not(.selected), a.new-issue-sub").first().hrefRedirect();
                            break;
                        //new subtask
                        case 'm':
                            $('div.issue div#issue_tree>.contextual>a').hrefRedirect();
                            break;
                        //edit issue	
                        case 'e':
                            if($("div#update")){
                                $("div#update").show();
                                $("textarea#issue_notes").focus();
                            }
                            break;
                        //issues list	
                        case 'i':
                            $("li>a.issues").hrefRedirect();
                            break;
                        //wiki	
                        case 'w':
                            $("li>a.wiki").hrefRedirect();
                            break;
                        //gantt	
                        case 'g':
                            $("li>a.gantt").hrefRedirect();
                            break;
                        //project switch
                        case 'p':
                            $('.drdn-trigger').click();
                            break;
                        //for new hotkeys
                        default:
                            console.log(e);
                            fired = 0;
                            break;
                    }
                    if(fired)
                        e.preventDefault();
                }
                
                //issue status change section
                
                //ctrl + shift + p
                else if (ifKeysPressed(e, issueKeys)){
                    var key = String.fromCharCode(e.which).toLowerCase();
                    var status_id = issueStatusMap[key];
                    if(status_id){
                        $("select#issue_status_id").val(status_id);
                        
                        switch(key){
                            case 'r':
                                //"Resolved": pass issue to its author
                                var author_id = $('p.author > a.user').attr('href').split('/').pop();
                                $('select#issue_assigned_to_id').val(author_id);
                                break;
                            case 'f':
                                //"Feedback": pass issue to previous assignee
                                var assigned_to_id = $('td.assigned-to > a.user').attr('href').split('/').pop();
                                var prev_assignees = [];
                                $('div#history div.journal h4 a.user').each(function(){
                                    var h_user_id = $(this).attr('href').split('/').pop();
                                    if(h_user_id != assigned_to_id){
                                        prev_assignees.push(h_user_id);
                                    }
                                });
                                if(prev_assignees.length > 0){
                                    prev_assignee = prev_assignees.pop();
                                    $('select#issue_assigned_to_id').val(author_id);
                                }
                                break;
                        }
                        
                        submitActiveForm();
                        e.preventDefault();
                    }
                }
                
            });
        },
        
        bindIssuesTableKeys()
        {
            var issues_table = 'table.list.issues';
            if ($(issues_table).length) { //issues table exists

                $(document).bind('keydown', function (e) {
                    //where is current focus
                    var activeElement = document.activeElement;
                    if(!(activeElement.localName == 'body' || $.contains( $(issues_table).get(0), activeElement ))){
                        //Focus outside of table. Supress this func
                        return;
                    }
                    var focus_selector = issues_table + ' tbody tr';
                    var focused_selector = focus_selector + '.issue_focus';
                    //move issue selector by "ArrowDown" and "ArrowUp"
                    if ((e.which == 38 || e.which == 40) && !e.ctrlKey && !e.altKey) {
                        var to_focus;
                        if ($(focused_selector).length) {
                            if (e.which == 38) //up
                                to_focus = $(focused_selector).prev();
                            else if (e.which == 40) //down
                                to_focus = $(focused_selector).next();

                            $(focused_selector).removeClass('issue_focus');
                        } else {
                            to_focus = $(focus_selector).first();
                        }
                        if (to_focus.length) {
                            to_focus.addClass('issue_focus');
                            to_focus.find('td.checkbox input')[0].focus();
                            if (e.shiftKey) {
                                $(focused_selector).find('td.checkbox input')[0].click();
                            }
                            e.preventDefault();
                        }
                    }
                    //perform actions on focused issue
                    if ($(focused_selector).length) {
                        if (e.which == 13) { //enter
                            $(focused_selector + ' td.subject a')[0].click();
                        }
                    }
                });

                /*$(issues_table).bind('contextmenu', function(e){
                console.log('fire');
                $('div#context-menu > ul > li > a')[0].focus();
                });*/

            }
        }
    }
    $(document).ready(function(){
        //hotkeys config
        
        //default base key combinations for a bulk of hotkeys
        //may be ctrlKey, altKey, shiftKey
        var commonKeys = ['ctrlKey', 'altKey'];			//for tabs switching
        var issueKeys = ['ctrlKey', 'shiftKey'];		//for issue status changes		
        
        //list of: 'status code' => 'status_id' 	//status name
        //in your redmine
        var issueStatusMap = {
                //'n': 1,		//New
                'p': 2,			//In Progress
                'r': 3,			//Resolved
                'f': 4,			//Feedback
                'c': 5			//Closed
            };
        
        HK.bindCommonKeys(commonKeys, issueKeys, issueStatusMap);
        HK.bindIssuesTableKeys();
    });

})();
