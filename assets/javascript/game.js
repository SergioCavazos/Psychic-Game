//Inicializo todas las variables
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var r = 0;
var wins = 0;
var losses = 0;
var userInput = "";
var randomLetter = "";
var guessLeft = 9;

// La variable guessLest luego la tengo que reinicializar en 9 para cuando comience cada partida eso va dentro de un ciclo

// La computadora selecciona una letra

function aleatoria() {
    var r = Math.floor((Math.random() * 27));
    randomLetter = computerChoice[r];
}

function reseteo() {
   guessLeft = 9;
  wrongLetters = "";
  document.getElementById("guessLeft").innerHTML = guessLeft;
};


function quitoOportunidad() {
    guessLeft--;
};

function juego() {
   
// Mientras las oportunidades sean mayores a Cero se produce la rutina
    if (guessLeft > 0) {    
         
    // El usuario selecciona una letra
    
    document.onkeyup = function (event) {

            var userInput = event.key.toLowerCase();

                // Comparar si es lo mismo que eligio la computadora
                if (userInput == randomLetter) {

                    // Si es lo mismo aumenta las ganadas, borra las letras acumuladas y se acaba el ciclo
                    document.getElementById("win").innerHTML = ++wins;
                    document.getElementById("guessLetters").innerHTML = "";
                    guessLeft=0;
                    aleatoria();
                    reseteo();
                    }
                else {
                    // Si no es lo mismo se le resta uno a las oportunidades, se agrega la letra seleccionada a las erroneas
                    quitoOportunidad();
                    document.getElementById("guessLeft").innerHTML = guessLeft;
                    wrongLetters = wrongLetters + ", " + userInput;
                    document.getElementById("guessLetters").innerHTML = wrongLetters;
                    
                        if (guessLeft == 0) {
                            // Si las oportunidades ya están en ceros se suma un punto al las partidas perdidas y se borran las letras acumuladas
                            document.getElementById("lost").innerHTML = ++losses;
                            document.getElementById("guessLetters").innerHTML = "";
                            aleatoria();
                            reseteo();
                        }
                    
                    };

        };

    };
};

aleatoria();
reseteo();
juego();
