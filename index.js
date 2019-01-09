
//string
var text = "Bonjour le monde!";
console.log(text);
console.log('text is a ', typeof text);

//number
var x = 4;
console.log(x);
console.log('x is a ', typeof x);

//boolean
var vrai = true;
console.log(vrai);
console.log('vrai is a ', typeof vrai);

//liste
var liste = [1, 2, 'abc', x, text, x];
console.log(liste);
console.log('liste is a ', typeof liste);

liste[0] = vrai;
console.log(liste[0]);

//object
var obj = {
  clef: 'valeur',
  clef2: 1234,
  clef3: liste
};
obj['clef4'] = 0;
obj.clef4 = 1;

console.log(obj);

//null et undefined
// console.log(objetNonDefini); // va lever une ReferenceError: "objetNonDefini is not defined"
console.log(obj.clefNonDefinie);

obj.clefVide = null;
console.log(obj.clefVide);


// Tests
if (x > 100) {
  console.log('x est grand !', x);
} else {
  console.log('x est petit !', x);
}

var y = 120;
if (x >= 100 && y >= 100) {
  console.log("x et y sont grands !");
} else if (x >= 100 || y >= 100) {
  console.log("l'un des deux est grand !");
} else {
  console.log("x et y sont petits !");
}

//Egalité stricte
var nombre = 4;
var string = '4'
console.log( ' nombre == string est ', (nombre==string) );
console.log( ' nombre === string est ', (nombre===string) );


//Boucles
for (var i = 0; i < liste.length; i++) {
  console.log(i, liste[i]);
}

for (var indice in liste) {
  console.log(indice, liste[indice]);
}

var i = 0;
while (i < liste.length) {
  console.log(i, liste[i]);

  i = i+1;
  // i += 1;
  // i++;
}

//Boucles sur les objets
for (var indice in obj) {
  if (obj.hasOwnProperty(indice)) { // Bonne habitude à prendre ! vous comprendrez pourquoi quand on verra "l'héritage"
    console.log(indice, obj[indice]);
  }
}


// modules & require
var math = require( './math.js' )

console.log(math.multiplier(3,3));

console.log( math.puissance3(5) );

setTimeout( function () {
  console.log(math.puissance3(10));
} , 1000 );

console.log( math.puissance3(5) );
