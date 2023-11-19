// ¡Es hora de poner el árbol de navidad en casa! 🎄
//
// Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
// Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
//
// Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.


const createXmasTree = (height) => {
    let tree = ''
    let base = height - 1
    let leafs = 1

    const iter = [...Array(height).keys()]
    iter.forEach((i) => {
        tree += '_'.repeat(base) + '*'.repeat(leafs) + '_'.repeat(base) + '\n'
        base -= 1
        leafs += 2
    })

    //Add base
    tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n'
    tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)

    return tree
}

console.log(createXmasTree(3))
console.log(createXmasTree(5))
console.log(createXmasTree(10))