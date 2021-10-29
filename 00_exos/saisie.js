// document.write('<p>******** EXO WHILE - résultat ***********</p>');

var nbr = 0;
console.log(typeof nbr);

while ( (nbr < 50) || (nbr > 100) ) {
    nbr = prompt('Entrez un nombre entre 50 et 100 : ');
    console.log(typeof nbr);
}

document.write('<p>Vous avez rentré le chiffre ' + nbr + ' la variable récupérée est bien comprise entre 50 et 100.</p>');



