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


console.log(decode('hola (odnum)')) // hola mundo

console.log(decode('(olleh) (dlrow)!'))// hello world!

console.log(decode('sa(u(cla)atn)s')) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus