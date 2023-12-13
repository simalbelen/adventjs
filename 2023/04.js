function decode(message) {
    
    //while (message.includes(')')) {
        let [aux, ...end] = message.split(')')
        let start = aux.split('(')
        let str = start.pop()
        console.log(str)
        str = str.split("").reverse().join(""); // Reverse string
        console.log(start) 
        start.push(str, end[0]).join()
        console.log(start) 

         
        // let str = message.split(')')[0].split('(').pop()
        // str = str.split("").reverse().join(""); // Reverse string
        // console.log(str)
     //}
    return message
}


console.log(decode('hola (odnum)')) // hola mundo

console.log(decode('(olleh) (dlrow)!'))// hello world!

console.log(decode('sa(u(cla)atn)s')) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus