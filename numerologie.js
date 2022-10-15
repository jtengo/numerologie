function nombre(chaine) {
    var somme = 0
    for (var i=0; i < chaine.length; i++) {
        somme += chaine.charCodeAt(i)
    }
    return somme
}

function somme(nombre) {
    var somme = 0
    chaine = String(nombre)
    for (var i=0; i < chaine.length ; i++) {
        somme += parseInt(chaine.charAt(i))
    }
    return somme
}

function chiffreAssocie(chaine) {
    valeur = nombre(chaine)

    while (valeur > 9) {
        valeur = somme(valeur)
    }
    return valeur
}

// test de nombre(chaine)

// est-ce 2x plus ?
console.log(nombre("cou"))
console.log(nombre("coucou"))

// chaque caractère :la somme est-elle correcte ?
for (c of "cou") { 
    console.log(c + " : " + nombre(c))
}
// test de somme(nombre)
console.log(somme(132))

// avec un chiffre : charAt != charCodeAt
console.log(somme(4))
console.log("4".charCodeAt(0))
console.log("4".charAt(0))

// conversion chaine de caractères et nombre
console.log(typeof "4".charAt(0))
console.log(parseInt("4".charAt(0)))
console.log(typeof parseInt("4".charAt(0)))

// test de chiffreAssocie(chaine)

//test valeur somme des chiffres
console.log(nombre("coucou"))
console.log(chiffreAssocie("coucou"))
// fin de test de chiffreAssocie(chaine)