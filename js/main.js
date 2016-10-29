var player1;
var aleatorio;
var player2;

var player1=prompt ("¿Cuál escoges? Piedra, papel o tijera");
var aleatorio=Math.round(Math.random()*3)+1;
var player2;
if (aleatorio == 1) {
	player2 = "papel";
} else if (aleatorio == 2) {
	player2 = "piedra";
} else if (aleatorio == 3) {
	player2 = "tijera";
}
console.log("Jugador escogió " + player1);
console.log("PC escogió " + player2);

if (player1==player2) {
	console.log("Empate");
}

if (player1=="piedra"&&player2=="tijera") {
	console.log("Jugador Gana");
}

if (player1=="piedra"&&player2=="papel") {
	console.log("PC Gana");
}

if (player1=="papel"&&player2=="tijera") {
	console.log("PC Gana");
}	

if (player1=="papel"&&player2=="piedra") {
	console.log("Jugador Gana");
}

if (player1=="tijera"&&player2=="papel") {
	console.log("Jugador Gana");
}

if (player1=="tijera"&&player2=="piedra") {
	console.log("PC Gana");
}