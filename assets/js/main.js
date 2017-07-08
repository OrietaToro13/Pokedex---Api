$(document).ready(function(){
	$.ajax({
	/*url de pokedex*/
	url:'http://pokeapi.co/api/v2/pokemon',
	/*pido los datos con GET*/
	type: 'GET',
/*tipo de dato*/
	datatype: 'JSON',
	/*cuantos datos hay*/
	data:{"limit": '719'}
})
.done(function(respuesta){
	console.log(respuesta);
	console.log("success");
	for(var i=1; i<719;i++){
		{//*img*//
		var pokeimagen =$("img src=https://pokeapi.co/media/img/" + i + ">")
});

.fail(function(respuesta){
	console.log("error");
	)
.always(function(respuesta){
	console.log("complete");
});
}
