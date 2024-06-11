let btn = document.querySelector('button');
let nouveauParagraphe = document.createElement('p');
document.getElementById('text').prepend(nouveauParagraphe,);

btn.addEventListener('click', () => {
    function start() {
        var i = 10;
        nouveauParagraphe.textContent = i;

        let interval = setInterval(() => {
            i--;
            if (i > 0) {
                nouveauParagraphe.textContent = i;
            } else {
                nouveauParagraphe.textContent = "Terminé!";
                clearInterval(interval); // Arrêter l'intervalle quand le compteur atteint 0
            }
        }, 1000); // Mettre à jour toutes les 1000 millisecondes (1 seconde)
    }
    start();
});





