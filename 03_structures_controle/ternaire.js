// JS  page opérateur ternaire 

// alert('coucou');

let x = 15;
let y = -20;

// faire un if else pour vérifier si x est supérieur ou égal à 10
// et on injecte le résultat dans p1

if (' x >= 10') {
    document.getElementById('p1').innerHTML = ' x contient ' + x + ' il est supérieur à 10';
}else{
    document.getElementById('p1').innerHTML = ' x contient ' + x + ' il est inférieur à 10';
}

// la même condition en ternaire
// ? = if; : = else

// 
if ( y > 10 ) {
    document.getElementById('p3').innerHTML = y >= 10 ? 'y est supérieur ou égal à 10' : 'y est inférieur à 10';
}else{
    document.getElementById('p3').innerHTML = y >= 10 ? 'y est supérieur ou égal à 10' : 'y est inférieur à 10';
}


// tester si y est supérieur à 10
// if else p3

// la même en ternaire p4
document.getElementById('p4').innerHTML = y >= 10 ? 'y est inférieur ou égal à 10' : 'y est inférieur à 10';

