// JS pour les opérateurs logiques

// alert('coucou');

// ET OU ou NON

let x = 5, y = -20;

console.log(x, y);

// ET &&

if ( x >= 0 && x <= 10) {// ET noté && cet exemple chaque condition doit être vraie
    document.getElementById('p1').innerHTML = ' x vaut ' + x + ' et est compris entre 0 et 10';
}

// OU = ||

if ( y -10 || y > 10 ) {
    document.getElementById('p2').innerHTML = ' y vaut ' + y + ' et est une valeur plus petite que moins -10 ou plus que 10';
}

// NO = ! ce n'est pas vrai
// 5 n'est pas inférieur ou égal à 2, autrement dit, si le test est false l'opérateur inversé (la négation !) renvoi true donc on éxécute
if ( ! (x <= 2) ) {// opérateur inversé = ce n'est pas un vrai,
    document.getElementById('p3').innerHTML = 'x qui contient ' + x + ' est supérieur à 2';

}