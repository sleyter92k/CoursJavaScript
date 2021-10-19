var tempC = prompt('Rentrez une température en Celsius, merci.')
    console.log(tempC);
    console.log(9/5);
    console.log(1*1.8);
    document.getElementById('li1').innerHTML = ' 1 degré Celsius = ' + ((1 * 1.8) + 32) +  ' Fahrenheit ';

    document.getElementById('li2').innerHTML = tempC + ' degrés Celsius = ' + ((tempC * 1.8) + 32) +  ' Fahrenheit ';

var tempC = prompt('Rentrez une température en Celsius, merci.')
    // console.log(tempC);
    // console.log(9/5);
    // console.log(1*1.8);
    document.getElementById('li1').innerHTML = ' 1 degré Celsius = ' + ((1 * 1.8) + 32) +  ' Fahrenheit ';

    document.getElementById('li2').innerHTML = tempC + ' degrés Celsius = ' + ((tempC * 1.8) + 32) +  ' Fahrenheit ';

    var tempF = (tempC * 1.8) + 32;
    console.log(tempF);
    document.getElementById('li3').innerHTML = ('1 degré Fahrenheit = ' + ((1 - 32 ) / 1.8) + ' Celsius ' );

    document.getElementById('li4').innerHTML = ( + tempF + ' degré(s) Fahrenheit = ' + ((tempF - 32 ) / 1.8) + ' Celsius ' );
    // console.log(document.querySelectorAll('li'));


