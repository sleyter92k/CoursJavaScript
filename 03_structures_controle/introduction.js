// JS intro structures de contrôle 

// alert ('coucou');
// TEST 1
let x = 4;
// console.log(x);
// console.log(typeof x);
console.log(typeof x, x);// type d'x ET valeur de x

let testEgalValeur = x == 4;
console.log(testEgalValeur);

// TEST 2

let testEgalValeurType = x === '4';
// contenu égal en type de données ET valeur
console.log(testEgalValeurType);//

let testDifferenceValeur = x != 4; //différent de
console.log(testDifferenceValeur);

let testDifferenceValeurType = x != 4; //différent en valeur OU en type
console.log(testDifferenceValeurType)

let testInferieur = x < 4;
console.log(testInferieur);

let testSuperieur = x > 4;
console.log(testSuperieur);

// alert('Valeur dans x égale à 4 (en valeur) ? : ' + testEgalValeur +
//     '\n Valeur dans x égale à 4 (en valeur ET en type) ? '  + testEgalValeurType +
//     '\n Valeur dans x different de 4 (en valeur) ? '  + testDifferenceValeur +
//     '\n Valeur dans x different de 4 (en valeur OU en type) ? '  + testDifferentValeurType +
//     '\n Valeur dans x inférieur à 4 (en valeur) ? '  + testInferieur +
//     '\n Valeur dans x supérieure à 4 (en valeur) ? '  + testSuperieur 
// );