function agregaComentario() {

  var containerComentarios = document.getElementById('contenedor-comentarios');
  var nombrePersona = document.getElementById('nombre').value;
  var contenidoComentario = document.getElementById('cajaComentarios').value;
  var nuevoComentario = document.createElement('div');
  var contenedorNombre = document.createElement('strong');
  var contenedorPost = document.createElement('p');
  var division = document.createElement('hr');
  var nodoNombre = document.createTextNode(nombrePersona + ' dice:');
  var nodoPosteo = document.createTextNode(contenidoComentario);


  contenedorNombre.appendChild(nodoNombre);
  contenedorPost.appendChild(nodoPosteo);

  //agregando nuevos comentarios
  nuevoComentario.appendChild(contenedorNombre);
  nuevoComentario.appendChild(contenedorPost);
  nuevoComentario.appendChild(division);
  //entregandole la clase posteo
  nuevoComentario.setAttribute('class', 'posteo');
  //pasando a div contenedor-comentarios
  containerComentarios.appendChild(nuevoComentario);

  //reseteando campos
  document.getElementById('nombre').value = "";
  document.getElementById('cajaComentarios').value = "";
}