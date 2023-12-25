// En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.
// Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.
// Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:
// Si ya es un palíndromo, un array vacío.
// Si no es posible, null.
// Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
//Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.

function getIndexsForPalindrome(word) {
    let char_list = word.split('')
    if (isPalindrome(char_list)) return [] // La palabra es palíndroma
    let end = word.length
    let first_start_position = null
    let first_end_position = null
    let previous_start_char = null
    let previous_end_char = null
    
    for (let start = 0; start < end; start++) {
        end = end - 1
        let start_char = char_list[start]
        let end_char = char_list[end]

        if (start_char != end_char || start === end){ // Caracteres no coinciden o es el caracter del medio
            if (start_char === previous_end_char){
                char_list[first_start_position] = start_char
                char_list[start] = previous_start_char
                const interval = [first_start_position, start]
                return (isPalindrome(char_list)) ? interval : null
            } else if (end_char === previous_start_char){
                char_list[first_end_position] = end_char
                char_list[end] = previous_end_char
                const interval = [end, first_end_position]
                return (isPalindrome(char_list)) ? interval : null
            }
            first_start_position = start
            first_end_position = end
            previous_start_char = start_char
            previous_end_char = end_char
        }
    }
    return null

    function isPalindrome(word){
        const original_word = word.join('')
        const reversed_word = [...word].reverse().join('') // Hecho asi ya que el reverse modifica tambien el array original
        return original_word === reversed_word
    }
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null
console.log(getIndexsForPalindrome('rotaratov')) // [4, 8]
