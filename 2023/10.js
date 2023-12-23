// ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.
// Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.
// Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.
// Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.
// Nota:
// El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
// Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
// Los adornos tienen un espacio en blanco entre ellos de separación.
// Si te fallan los tests y visualmente parece que el árbol está bien, comprueba que no haya espacios en blanco que sobren, especialmente a la derecha de cada línea.

function createChristmasTree(ornaments, height) {
    let pointer = 0
    let num_spaces = height - 1
    let tree = ''

    for (let i = 0; i < height; i++) {
        tree += ' '.repeat(num_spaces)
        num_spaces--
        const new_line = create_line(pointer, ornaments, i+1)
        tree += new_line.line
        pointer = new_line.new_pointer
    }

    tree += ' '.repeat(height-1) + '|\n'
    return tree

    function create_line(pointer, ornaments, width){
        let p = pointer
        let line = ''
        for (let j = 0; j < width; j++) {
            line += ornaments.charAt(p)
            p = (p+1) % ornaments.length
            line += ((j + 1) === width) ? '\n' : ' '
        }
        return {new_pointer:p, line:line}
    }
}


console.log(createChristmasTree('123', 4))

//    1
//   2 3
//  1 2 3
// 1 2 3 1
//    |

console.log(createChristmasTree('*@o', 3))

//   *
//  @ o
// * @ o
//   |

console.log(createChristmasTree("xo", 4))

//    x
//   o x
//  o x o
// x o x o
//    |