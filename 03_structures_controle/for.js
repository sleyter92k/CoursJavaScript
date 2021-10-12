// page sur la boucle for

// alert('coucou');

for (let i = 0; i < 10; i++) { // (1- initialisation de la variable; -2 test ou condition de sortie; 3- incrémentation)
    document.getElementById('p1').innerHTML += 'La variable i contient : ' + i + ' à chaque passage de la boucle<br>';
    console.info (typeof i, i);
}

// i = itérator = curseur

for (let x = 0; x < 10; x++) { // (1- initialisation de la variable; -2 test ou condition de sortie; 3- incrémentation)
    document.getElementById('tb1').innerHTML += '<tr><td>La variable x contient : ' + x + ' à chaque passage de la boucle</tr></td>';
    console.info (typeof x, x);
} 

for (let arretToi = 0; arretToi < 100; arretToi++) {
    if (arretToi == 56) {
        break;// instruction
    }// fin du if
    document.getElementById('p2').innerHTML += 'La variable arretToi contient ' + arretToi + ' à chaque tour de boucle.<br>';
}// fin de for