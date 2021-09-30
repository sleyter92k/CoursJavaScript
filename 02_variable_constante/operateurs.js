// JS pour la page opérateur

// alert('coucou');

let x = 200;
let y = 4;
let z = 40;

console.log(x,y,z);

let a = x + 1;
let b = x + y;
let c = x - y;
let d = x * y;
let e = x / y;
let f = 5 % 3;
let g = x ** y;

console.log(a, b, c, d, e);

console.log(f);

console.log(g);

// une alerte pour afficher les résultats 
// \n permet d'aller à la ligne dans une alerte
alert('a contient : ' + a + 
'\n b contient : ' + b  +
'\n c contient : ' + c  +
'\n d contient : ' + d  +
'\n e contient : ' + e +
'\n f contient : ' + f +
'\n g contient : ' + g + '.'
);


// Priorité des calculs

var h = 1 - 2 - 3;
// Le calcul se fait de gauche à droite
console.log(h);
let j = 1 + 4 - 5;
console.log(j);

// Avec les parenthèse
let l = (1 - 2) * 3;
console.log(1);

let m = 58;
console.log(m);
alert(m);
m += 2;
console.log(m);

m -= 50;
console.log(m);