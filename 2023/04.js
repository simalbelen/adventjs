// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
// Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.
// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

// Notas:
// - Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
// - En el mensaje final no deben quedar paréntesis.
// - El nivel máximo de anidamiento es 2.

function decode(message) {
    while (message.includes(')')) {
        let [aux, ...end] = message.split(')')
        end = end.join(')')
        let start = aux.split('(')
        let str = start.pop()
        start = start.join('(')

        str = str.split("").reverse().join(""); // Reverse string
        message = start.concat(str, end)
    }
    return message
}


console.log(decode('hola (odnum)'))// hola mundo

console.log(decode('(olleh) (dlrow)!'))// hello world!

console.log(decode('sa(u(cla)atn)s')) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus