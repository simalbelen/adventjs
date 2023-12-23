// Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.
// Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
// Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:
// Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.
// Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
 
function drawGift(size, symbol) {
    if (size === 1) return '#\n'
    let gift = ''
    let dimension = size + (size - 1) // ancho = alto. El punto medio siempre coincide con "size"
    const repeated_part = '#' + symbol.repeat(size - 2) + '#'
    let num_spaces = size
    for (let i = 1; i <= dimension; i++) {
      if (i === size){ // Mitad del regalo
        gift = gift + '#'.repeat(size - 1) + repeated_part + '\n'
      } else if ( i < size){ //Parte superior del regalo
        num_spaces--
        if (num_spaces === (size - 1)){ // Primera fila
          gift = gift + ' '.repeat(num_spaces) + '#'.repeat(size) + '\n'
        } else { // Resto de filas
          gift = gift + ' '.repeat(num_spaces) + repeated_part + symbol.repeat(dimension - size - num_spaces - 1) + '#\n'
        }
      } else { // (i > size) Parte inferior del regalo
        if (num_spaces === (size - 1)){ // Ultima fila
          gift = gift + '#'.repeat(size) + ' '.repeat(num_spaces) + '\n'
        } else { // Resto de filas
          gift = gift + repeated_part + symbol.repeat(dimension - repeated_part.length - num_spaces - 1) + '#'+ ' '.repeat(num_spaces) + '\n'
        }
        num_spaces++
      }
    }
    return gift
  }

console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, '^'))
/*
#
*/
