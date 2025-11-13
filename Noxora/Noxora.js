const nombreSecret = Math.floor(Math.random() * 100) + 1;
let trouve = false;

while (!trouve) {
    let proposition = prompt("Devinez le nombre secret (entre 1 et 100) :");
    proposition = Number(proposition);

    if (proposition === nombreSecret) {
        alert("Félicitations ! Vous avez deviné le nombre secret.");
        trouve = true;
    } else if (proposition < nombreSecret) {
        alert("Trop bas ! Essayez encore.");
    } else {
        alert("Trop haut ! Essayez encore.");
    }
}
