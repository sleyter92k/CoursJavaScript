// fonctions

// alert('coucou')
// random()
console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();// ici on exécute le code "caché" derrière la fonction, ob appelle la fonction ou  l'invoque

//replace
let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';
console.log(discours1);

// création de fonctions

//1- multiplier le résultat de random() par 100

function randomFois100() {
    return Math.random() * 100;
}

 console.log(randomFois100);

document.getElementById('p3').innerHTML = randomFois100();

// 2nde exemple une multiplication

function multiplier(nbr1,nbr2) {// les paramètres de la fonction // return (nbr1 * nbr2);// la fonction simplement

    // return (nbr1 * nbr2);
    return ('la multiplication de ' + nbr1 + ' par ' + nbr2 + ' = ' + (nbr1 * nbr2));
}
// ici on "appelle" la fonction
// un appel de fonction
console.log(multiplier(2,56));// la fonction avec les arguments
document.getElementById('p4').innerHTML = multiplier(10,9);// idem

// Exo faites une fonctions pour soustraire un nombre d'un autre autre
// soustraction

function soustraire(nbr1,nbr2) {
    return ('Soustraction : ' + nbr1 + ' - ' + nbr2 + ' = ' + (nbr1 - nbr2));
}
console.log(soustraire(10,54));
document.getElementById('p5').innerHTML = soustraire(56,9);


function additionner(nbr1,nbr2) {
    return ('Addition : ' + nbr1 + ' + ' + nbr2 + ' = ' + (nbr1 + nbr2));
}
console.log(additionner(10,54));
document.getElementById('p6').innerHTML = additionner(56,9);

// modulo
function leModulo(nbr1,nbr2) {
    return ('le modulo ( le reste de la division ) : ' + nbr1 + ' / ' + nbr2 + ' le modulo est ' + (nbr1 % nbr2));
}

console.log(leModulo(10,54));
document.getElementById('p7').innerHTML = leModulo(10,3);