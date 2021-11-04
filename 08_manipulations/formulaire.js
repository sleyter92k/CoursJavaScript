// alert('coucou');
        // Controle du formulaire avec une fonction 
        // On verifie la longueur des contenus dans les 2 input

        function controleForm() {//event paramètre a enlever également
            //event.preventDefault(); // pour empecher l'envoi du formulaire, à enlever quand le site est terminé

           if (document.form1.pseudo.value.length < 5 || document.form1.pseudo.value.length > 15 ) {
               console.log(document.form1.pseudo.value);
               console.log(document.form1.pseudo.value.length);
               alert('Votre pseudo dois contenir entre 5 et 15 caractère');
           }

           // mot de passe 
           if (document.form1.mdp.value.length < 8 || document.form1.mdp.value.length > 15 ) {
               console.log(document.form1.mdp.value);
               console.log(document.form1.mdp.value.length);
               alert('Votre Mot de passe dois contenir entre 8 et 15 caractère');
           }
       }

       // controle du formulaire d'inscription avec une fonction

       let formInscrip = document.getElementById('formulaireInscription');
    console.log(formInscrip);

    // écoute de l'envoie du formulaire 
    formInscrip.addEventListener('submit', inscriptionform);
    // cration fonction 
    function inscriptionform (event){
        event.preventDefault();
        //  récupération du contenu des champs du formulaire
        //  on cible dans des variable  les value de tous le chemps du form

        let prenom = event.target.prenom.value;
        let nom = event.target.nom.value;
        let email = event.target.email.value;
        let mdp2 = event.target.mdp2.value;
        let confmdp2 = event.target.confmdp2.value;
       

        
        console.log(prenom,nom,email,mdp2,confmdp2);

    }