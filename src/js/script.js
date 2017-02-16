$(document).ready(function(){
	$('.one-button').click(function(){
		$('.first-screen').toggle(100);
		$('.second-screen').show();
	});


	$('.two-button').click(function(){
		var nombre = $('#icon_prefix').val();
		if (nombre == null || nombre.length == 0){
			alert('¡Error! Debe ingresar un nombre');
		}else{
			alert('Ok!');
		}
		$('.second-screen').toggle(100);
		$('.third-screen').show();
	});
});