// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
//
// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
// 
// Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

const isValid = (letter) => {
    let abierto = 0
    let cerrado = 0
    let relleno = 0
    let invalido = false
    const char_array = letter.split('')
    char_array.forEach(char => {
        if (char === '('){
            abierto += 1
        } else if (char === ')'){
            cerrado += 1
        } else if (abierto > cerrado){ //Es otro caracter y se ha abierto un paréntesis
            if (char  === '{' || char === '['){
                invalido = true
            } else if (abierto > relleno) {
                relleno += 1
            }
        }
    });
    return abierto === cerrado && abierto === relleno && !invalido
}

console.log(isValid("bici coche (balón) bici coche peluche")) // -> ✅
console.log(isValid("(muñeca) consola bici")) // -> ✅
console.log(isValid("bici coche (balón bici coche")) // -> ❌
console.log(isValid("peluche (bici [coche) bici coche balón")) // -> ❌
console.log(isValid("(peluche {) bici")) // -> ❌
console.log(isValid("() bici")) // -> ❌