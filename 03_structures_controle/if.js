// js pour la page if

// alert ('coucou');

let x = 4;
let y = 0;
// 1
if(x > 1) {// if(TEST) si test est évalué à true 
    alert('x contient ' + x + ' et cette valeur est supérieure à 1');// on exécute ce bloc de code
}
// 2
if(y < 1 ) {
    alert('y contient '  + y + ' et cette valeur est inférieure à 1');
}
// 3
if(x == y) {
    alert('x = ' + x + ', et y = ' + y + ' les deux variables contiennent la même valeur');
}

// 4e
// l'alerte ne s'affiche pas car la valeur de y qui contient 0, 0 est une des valeurs qui renvoie false
if(y) {// 0 renvoi toujours false
    alert('4/ la valeur de y est évaluée à "true"')
}