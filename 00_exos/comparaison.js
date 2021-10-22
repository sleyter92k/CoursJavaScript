// alert('coucou');

var comparatif = prompt('Choissisez un nombre');
var comparatif2 = prompt('Choissisez un 2ème nombre');
console.log(comparatif, comparatif2);

if (comparatif < comparatif2 ) {
    document.getElementById('comparaison').innerHTML = ('<p> ' + comparatif + ' est inférieur à ' + comparatif2 + '</p>');
} else if (comparatif > comparatif2) {
    document.getElementById('comparaison').innerHTML = ('<p> ' + comparatif + ' est supérieur à ' + comparatif2 + '</p>');
} else {
    document.getElementById('comparaison').innerHTML = ('<p> ' + comparatif + ' est égal à ' + comparatif2 + '</p>');;
}

// on doit vérifier d'abord que ce sont bien des nombres qui sont saisi par l'utilisateur dans un if else
// si ce sont des nombres on fera le test de comparaison 
// sinon on dira ce ne sont pas des nombres

// isNaN() nous dit "ce n'est pas un nombre "
//!isNaN()nous dit  "c'est bien un nombre"

//on doit vérifier d'abord que ce sont bien des nombres qui sont saisi par l'utilisateur dans un if else
//si ce sont des nombres on fera le test de comparaison
//sinon on dira ce ne sont pas des nombres

if ((!isNaN(comparatif))&&(!isNaN(comparatif2))) {
    // if ((!isNaN(nbr1))&&(!isNaN(nbr2))) cela nous dit ce sont bien des nombres ,tous les deux
    if ( comparatif > comparatif2) {
        document.getElementById('comparaison').innerHTML = 'Le nombre ' + comparatif + ' est plus grand que le nombre ' + comparatif2 + ' . ';
     } else if (comparatif<comparatif2) { // sinon si cela est vrai
         document.getElementById('comparaison').innerHTML = 'Le nombre ' + comparatif + ' est plus petit que le nombre ' + comparatif2 + '.';
     } else { // sinon
         document.getElementById('comparaison').innerHTML = 'Les deux nombres sont égaux . ';
     }
}else{
    document.getElementById('comparaison').innerHTML = 'Vous n\'avez pas saisi de nombre ';
}

