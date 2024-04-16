setTimeout(function(){
let userName = prompt("Ingresa tu nombre");
let instructions = `Instrucciones: \n1. 🧱 gana a ✂️\n2. 📄 gana a 🧱\n3. ✂️ gana a 📄\n¿ ${userName} estás listo para jugar?`;
let isReady = confirm(instructions);

let userScore = 0;
let computerScore = 0;

if (isReady) {
    let names = ["John", "Jane", "Bob", "Alice", "Charlie", "Emma"];

    function getRandomName() {
        let randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
    const randomName = getRandomName();

    function getComputerChoice() {
        return Math.floor(Math.random() * 3) + 1;
    }

    function playRound(userChoice) {
        let computerChoice = getComputerChoice();
        let choices = ["🧱", "📄", "✂️"];

        if ((userChoice == 1 && computerChoice == 3) ||
            (userChoice == 2 && computerChoice == 1) ||
            (userChoice == 3 && computerChoice == 2)) {
            userScore++;
            
            return `Ganaste la ronda! Elegiste ${choices[userChoice-1].toUpperCase()} y ${randomName}(computadora) eligió ${choices[computerChoice-1].toUpperCase()}. Puntuaciones: ${userName} - ${userScore}, ${randomName}(Computadora) - ${computerScore}`;

        } else if (userChoice == computerChoice) {
            return `Empate! Ambos eligieron ${choices[userChoice-1].toUpperCase()}. Puntuaciones: ${userName} - ${userScore}, ${randomName}(Computadora) - ${computerScore}`;
        } else {
            computerScore++;
            return `Perdiste la ronda! Elegiste ${choices[userChoice-1].toUpperCase()} y ${randomName}(computadora) eligió ${choices[computerChoice-1].toUpperCase()}. Puntuaciones: ${userName} - ${userScore}, ${randomName}(Computadora) - ${computerScore}`;
        }
    }

    while (userScore < 5 && computerScore < 5) {
        let userChoice = prompt(` ¡Hola! ${userName} Elige: 1 para 🧱, 2 para 📄, 3 para ✂️`);
        
        // Validación de la elección del usuario
        while(userChoice < 1 || userChoice > 3 || isNaN(userChoice)) {
            alert("Por favor, ingresa un número válido (1, 2 o 3).");
            userChoice = prompt(` ¡Hola! ${userName} Elige: 1 para 🧱, 2 para 📄, 3 para ✂️`);
        }

        alert(playRound(userChoice));
    }
}else{
    alert(`${userName} Nos vemos en la proxima!`);
}
}, 1000);