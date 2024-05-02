function playTurn() {
	// ofrece tres cartas al jugador.
	for ( let i = 0; i < 3; i++ ) {
		askPlayerForCard();
	}
	showGameResult()
}

function askPlayerForCard() {
	// ofrece una carta al jugador.
	const playerPicksCard = confirm( 'pedir carta? tenés ' + playerScore + ' puntos. \n Para aceptarla: OK \n Para plantarte: cancelar' );
	if ( playerPicksCard ) {
		// si el jugador acepta la carta, el valor de esta se suma al puntaje del jugador y se muestra por alert.
		const playerNewCard = Math.ceil( Math.random() * 12 );
		playerScore += playerNewCard;
		alert( 'te salio un ' + playerNewCard );
	}
}

function showGameResult() {
	// muestra por alert el puntaje del jugador, dando una evaluacion de que tan buen puntaje obtuvo.
	if ( playerScore < 17 ) {
		alert( playerScore + ' puntos, mmm la tenes complicada...' );
	} else if ( playerScore > 21 ) {
		alert( playerScore + ' puntos, te pasaste!' );
	} else if ( playerScore != 21 ) {
		alert( playerScore + ' puntos, buena mano' );
	} else {
		alert( playerScore + ' puntos, Blackjack!' );
	}
	alert('¡Reinicia la página para volver a jugar!')
}