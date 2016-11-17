//Hook up the tweet display

$(document).ready(function() {
						   
    $(".tweet").tweet({
        username: "flashuser",
        count: 3,
        loading_text: "loading tweets..."
    });

});	
