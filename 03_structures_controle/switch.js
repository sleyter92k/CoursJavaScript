// JS page switch

// alert('coucou les loulous');

let x = 15;
console.log(typeof x, x);

// switch(), case break, case break, default

// x = 2 ? ou 5 ? ou 10 ? ou 15 ? ou 20 ?

switch(x) {
    case 2:
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break;
    case 5:
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break; 
    case 10:
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break;
    case 15:
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break; 
    case 20:
        document.getElementById('p1').innerHTML = 'x contient la valeur 2';
        break;
    default: 
        document.getElementById('p1').innerHTML = 'x ne contient ni 2, ni 5, ni 10, ni 15, ni 20 !!!';                 
}