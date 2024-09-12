script.js
function clearDisplay() {
    document.getElementById("result").value = '';
    removeSmiley();  // Retirer le smiley quand on efface l'écran
}

function appendToDisplay(value) {
    document.getElementById("result").value += value;
    changeCalculatorColor(); // Changer la couleur à chaque clic
}

function calculateResult() {
    const display = document.getElementById("result").value;
    try {
        const result = eval(display);
        document.getElementById("result").value = result;

        changeCalculatorColor();  // Changer la couleur
        showSmiley();  // Montrer le smiley après le calcul
    } catch (e) {
        document.getElementById("result").value = 'Error';
        removeSmiley();  // Retirer le smiley si une erreur est générée
    }
}

// Fonction pour changer la couleur de la calculatrice (déjà présente)
function changeCalculatorColor() {
    const calculator = document.querySelector('.calculator');
    const colorClasses = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
    calculator.classList.remove(...colorClasses);
    const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
    calculator.classList.add(randomColor);
}

// Fonction pour afficher le smiley après un calcul
function showSmiley() {
    // Vérifier si un smiley existe déjà, sinon en créer un
    if (!document.getElementById('smiley')) {
        const smiley = document.createElement("div");
        smiley.id = "smiley";
        smiley.innerHTML = "💅🏻🥳";  // Emoji smiley
        document.body.appendChild(smiley);
    }
}

// Fonction pour retirer le smiley (si nécessaire)
function removeSmiley() {
    const smiley = document.getElementById('smiley');
    if (smiley) {
        smiley.remove();
    }
}
