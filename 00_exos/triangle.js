// 1er méthode for 
       for (var result = "#"; result.length <=8; result = result + "#")
    console.log(result);
    //   2eme méthod for
// let x = 8;

// for (let y = 0; y < x; y++) {
//     let diase = '';
//     let espaces = '';
    
//     for (let i = 0; i < 1 * (y +1); i++) {
//         diase += '#';
//     }
//     for (let i = 0; i < x - (y + 1); i++) {
//         espaces += ' ';
//     }

//     console.log(espaces + diase);
   
// }
// méthode while
console.log('**** avec while ******')
var result = "#"
while(result.length <=21 ){
console.log(result);
result = result +'.'+ "#";

}