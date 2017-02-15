
$(document).ready(function(ev){

	$('.one-button').click(function(){
        $('.first-screen').toggle(100);
        $('.second-screen').show();
    });
	$('.two-button').click(function(){
        $('.second-screen').toggle(100);
        $('.third-screen').show();
    });

});