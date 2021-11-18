// alert('test liaison');

// initialisation de la variable
let jeu = 0; 
console.log(typeof jeu);


let reponse = 1;
// "oui" && ET "non" dans une boucle
while ((jeu !== 'oui') && (jeu !== 'non')) {
    // question pour le joueur
    jeu = prompt('On joue au ni oui ni non ?? Allez, tapez quelque chose !');
    // injection dans le html le résultat du joueur
        document.getElementById('resultat').innerHTML = 'Perdu !';
        console.log(jeu);
};

reponse++;