// Obtener elementos del DOM
const jugador1 = document.getElementById('jugador1');
const jugador2 = document.getElementById('jugador2');
const opciones = document.getElementById('opciones');
const mensajeResultado = document.getElementById('mensaje');
const reiniciarBtn = document.getElementById('reiniciar');

// Variables para almacenar las jugadas de los jugadores
let jugadaJugador1 = null;
let jugadaJugador2 = null;

// Función para seleccionar el jugador
function seleccionarJugador(jugador) {
  opciones.classList.remove('oculto');
  jugador1.classList.remove('seleccionado');
  jugador2.classList.remove('seleccionado');

  if (jugador === 'jugador1') {
    jugador1.classList.add('seleccionado');
  } else {
    jugador2.classList.add('seleccionado');
  }
}

// Función para seleccionar la jugada
function seleccionarJugada(jugada) {
  if (jugadaJugador1 === null) {
    jugadaJugador1 = jugada;
    jugador1.classList.remove('seleccionado');
    jugador2.classList.add('seleccionado');
  } else if (jugadaJugador2 === null) {
    jugadaJugador2 = jugada;
    opciones.classList.add('oculto');
    determinarResultado();
  }
}

// Función para determinar el resultado del juego
function determinarResultado() {
  const reglas = [
    { jugada1: 'piedra', jugada2: 'tijera', resultado: 'Jugador 1 gana' },
    { jugada1: 'papel', jugada2: 'piedra', resultado: 'Jugador 1 gana' },
    { jugada1: 'tijera', jugada2: 'papel', resultado: 'Jugador 1 gana' },
    { jugada1: 'tijera', jugada2: 'piedra', resultado: 'Jugador 2 gana' },
    { jugada1: 'piedra', jugada2: 'papel', resultado: 'Jugador 2 gana' },
    { jugada1: 'papel', jugada2: 'tijera', resultado: 'Jugador 2 gana' },
  ];

  const regla = reglas.find((regla) => regla.jugada1 === jugadaJugador1 && regla.jugada2 === jugadaJugador2);
  const resultado = regla ? regla.resultado : 'Empate';
  mostrarResultado(resultado);
  reiniciarBtn.disabled = false;
}

// Función para mostrar el resultado en el DOM
function mostrarResultado(resultado) {
  mensajeResultado.textContent = resultado;
}

// Función para reiniciar el juego
function reiniciarJuego() {
  jugadaJugador1 = null;
  jugadaJugador2 = null;
  jugador1.classList.remove('seleccionado');
  jugador2.classList.remove('seleccionado');
  opciones.classList.remove('oculto');
  mensajeResultado.textContent = '';
  reiniciarBtn.disabled = true;
}

// Eventos de clic para seleccionar jugador y jugada
jugador1.addEventListener('click', function() {
  seleccionarJugador('jugador1');
});

jugador2.addEventListener('click', function() {
  seleccionarJugador('jugador2');
});

document.getElementById('piedra').addEventListener('click', function() {
  seleccionarJugada('piedra');
});

document.getElementById('papel').addEventListener('click', function() {
  seleccionarJugada('papel');
});

document.getElementById('tijera').addEventListener('click', function() {
  seleccionarJugada('tijera');
});
