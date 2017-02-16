 $(document).ready(function(){ 
    var jugadorUno = $('.jugadorUno').val();
    var jugadorDos = $('.jugadorDos').val();
    var tamanio = 3;
    //creacion tablero
    function board(){
        $('.cat').append('<p class="quienJuega">Turno de: <input class="waves-effect waves-light btn" id="jugador" type="button"></p>');
        for( i = 1; i <= tamanio; ++i){
            $('.cat').append('<div class="espacio"></div>');
            for( j = 1; j <= tamanio; ++j){
                $('.cat').append( '<input class="casilla btn" type="button" value="-" id="'+i+j+'"/>' );
            }
        }
        $('.cat').append('<div><div id="mensaje"></div></div>');       
    }
    board();
    var turn = 'o';
    //comparacion para saber quien gana entre verticales, horizontales y diagonales
    function comparacion(){
        for ( i = 1; i <= tamanio; ++i){
            for( j = 1; j <= tamanio; ++j){
                var row = i; 
                var col = j;
                var contTurnos = 0;
                var contRow = 1;
                var contCol = 1;
                var contDiag = 1;
                var contDiagDos = 1;

                    $('.casilla').each(function() {
                      var casillaSeleccionada = $(this).attr('id');
                        //comparacion en diagonales
                        if ((casillaSeleccionada.charAt(0) == row) && ($(this).val()==turn)){
                            ++contRow;	
                        
                            if(contRow == (tamanio + 1)){
                                ganadorFinal();	
                            }
                        }
                        //comparacion en verticales
                        if ((casillaSeleccionada.charAt(1) == col) && ($(this).val() == turn)){
                            ++contCol;

                            if(contCol == (tamanio + 1)){
                                ganadorFinal();
                            }
                        }
                        //comparacion en diagonales
                        if ((casillaSeleccionada.charAt(1) == casillaSeleccionada.charAt(0)) && ($(this).val() == turn)){
                            ++contDiag;
                            if (contDiag == (tamanio + 1)){
                                ganadorFinal();
                            }
                        }
                        var totalDiag = parseInt(casillaSeleccionada.charAt(1)) + parseInt(casillaSeleccionada.charAt(0));
                        if (((totalDiag) == (tamanio + 1)) && ($(this).val() == turn)){
                            ++contDiagDos;

                            if (contDiagDos == (tamanio + 1)){
                                ganadorFinal();	
                            }
                        }
                        if ($(this).val() != '-'){
                            ++contTurnos;
                            
                            if (contTurnos == (tamanio * tamanio)){
                                finJuego();
                            }
                        }
                    });
            }
        }
    }
    // mensaje ganador
    function ganadorFinal(){
        $('#mensaje').html('Ganó ' + turn);
        $('.mensajeFinal').show();
    }
    //mensaje juego terminado
    function finJuego(){
        $('#mensaje').html('Game Over');
        $('.mensajeFinal').show();
    }
    //llenado de casillas seleccionadas
    $('.casilla').click(function() {
        $(this).val(turn);
        comparacion(); 
        turn = (turn == "o" ) ? "x" : "o" ;
        $('#jugador').val(turn);
    });
});   