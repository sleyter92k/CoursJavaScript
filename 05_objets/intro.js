// alert('coucou')

let auteur = 'Victor Hugo';

let utilisateur = {// ici on a une veritable objet
    //nom, email, age et adresse sont des propriétés de l'objet utilisateur
    //nom : ici nous avons des propriétés qui sont dans un tableau, un "array" qui commence à 0
    nom : ['Victor', 'Marie', 'Hugo'],// indice 0
    age : 2,
    email : 'totor@hugo.fr',
    adresse : 'Besançon',

    bonjour: function(){
        alert('bonjour j\ai '  + this.age +  ' ans et mon nom est ' + this.nom[0] + ' ' +this.nom[1] +' '+this.nom[2]);
    }
}

console.info(typeof utilisateur,utilisateur);
utilisateur.bonjour();