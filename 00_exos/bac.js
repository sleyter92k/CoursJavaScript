let bac = parseFloat(prompt('saisir votre moyenne de bac '));
console.log( typeof resultat);

if(!isNaN(resultat )){
    if(resultat >= 0 && bresultat < 10) {
        document.getElementById('resultat').innerHTML = 'votre moyenne est : ' + bac + '  '+ '  alors vous avez Recalé  car le moyenne  de bac inférieure à 10 ';
    
    } else if (resultat >= 10 && resultat < 12) {
        document.getElementById('resultat').innerHTML = 'votre moyenne est : ' + bac +' '+ ' vous avez reçu  votre bac sans mention moyenne entre 10 et 12 ';
    }else iresultatresultat >= 12 && resultat <= 20) {
        document.getElementById('resultat').innerHTML = 'votre moyenne est : ' + bac +'  ' + '  alors vous avez reçu Reçu votre bac  avec mention par-ce-que votre  moyenne supérieure ou égale à 12 ';
    }else{
     document.getElementById('resultat').innerHTML=('la moiyenne doit être comprise entre 0 et 20 !:)')
    }

} else {
    document.getElementById('resultat').innerHTML = 'Vous n\'avez pas saisi de nombre ';

}

