document.getElementById('btnDiapo2').addEventListener('click', function() {
    document.getElementById('imgDiapo2').src = 'img/piscine2.jpg';
    document.getElementById('imgDiapo2').alt = 'une piscine au seychelles';
})

// diapo 3

// on va faire une fonction tourneImages()

function tourneImages() {
    var getImage3 = document.getElementById('imgDiapo3').getAttribute('src');
    console.log(getImage3);
    switch(getImage3) {
        case 'img/plage1.jpg':
                document.getElementById('imgDiapo3').src= 'img/plage2.jpg';
                document.getElementById('imgDiapo3').alt= 'page2';

            break;
        case 'img/plage2.jpg':
                document.getElementById('imgDiapo3').src= 'img/plage3.jpg';
                document.getElementById('imgDiapo3').alt= 'page3';
            break;
        case 'img/plage3.jpg':
                document.getElementById('imgDiapo3').src= 'img/plage4.jpg';
                document.getElementById('imgDiapo3').alt= 'page4';
            break;
        case 'img/plage4.jpg':
                 document.getElementById('imgDiapo3').src= 'img/plage1.jpg';
                 document.getElementById('imgDiapo3').alt= 'page1';
             break;
    }

}