// page keydown
document.addEventListener('keydown', clavier);//écouteur d'évènement surune touche pressé
document.onkeydown = clavier;
console.log(document.getElementById('bouge'));
// la fonction clavier()
function clavier(e) {
    var carre = document.getElementById('bouge');
    if (e.keycode == '38') { //38 flèche du haut
        carre.style.top = (carre.offsetTop - 20) + 'px';
    } else if (e.keycode == '39') {//39 flèche de droite
        carre.style.left = (carre.offsetLeft - 20) + 'px';
    } else if (e.keycode == '40') {//40 flèche du bas
        carre.style.top = (carre.offsetTop - 20) + 'px';
    } else if (e.keycode == '37') {//37 flèche de gauche 
        carre.style.left = (carre.offsetLeft - 20) + 'px';
