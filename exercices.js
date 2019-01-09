
/**
* Exercice 1: les listes
**/

//Déclarez une liste "maListe", qui contient les éléments suivants : 'Je', 'mange' et 'des pommes'

//Affichez la liste

//Remplacez le premier élément de la liste par "Nous"

//Utilisez maListe.length pour replacer le dernier élément de la liste par "du poulet"

//Accédez au deuxième élément de la liste, et ajoutez 'ons' à la fin de celui-ci

//Utilisez maListe.join() avec le bon paramètre pour transformer maListe en une string, que vous afficherez dans la console
//https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/join



/*----------------------------------------*/

/**
* Exercice 2 : les objets
**/

//Déclarez un object 'voiture', qui a les propriétés suivantes:  - carburant, qui vaut 'diesel'
//                                                               - nbRoues, qui vaut 4

//Ajoutez à l'objet voiture une propriété 'moteur', qui est lui-même un objet contenant les propriétés suivantes : 'puissance' qui vaut 90, et 'enMarche' qui vaut false
//Faites-le sans utiliser de crochets!

//Question : que vaut voiture['marque'] ? (essayez de répondre sans coder!)

/*----------------------------------------*/

/**
* Exercice 3 : les fonctions et les tests
**/

//Ecrivez la fonction "estUneVoiture", qui :
// - attend un seul paramètre ou argument
// - vérifie que le paramètre est bien un objet
// - vérifie que l'objet possède la propriété 'moteur', qui lui-même possède la propriété 'puissance'
// - vérifie que l'objet a au moins 4 roues, mais moins de 6
// - retourne true si toutes les conditions sont réunies, sinon false
// Aide : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty
// Note : vous n'êtes pas obligé d'utiliser hasOwnProperty, il existe d'autres moyens! Soyez ingénieux !


//Ecrivez la fonction "allume", qui :
// - attend un seul paramètre
// - vérifie que le paramètre est une voiture, sinon retourne null
// - vérifie la propriété 'enMarche' de la propriété 'moteur' de l'objet, et le change à: true si besoin
// - retourne l'objet voiture !


/*----------------------------------------*/

/**
* Exercice 4 : les boucles
**/
// var maListe = [1, 2, 'trois', 4, 'cinq', 6];

//Ecrivez une fonction qui :
// - attend un paramètre 'element'
// - parcours maListe,
// - et retourne true si maListe contient 'element'
