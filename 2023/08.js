//Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 para la víspera de Navidad 🎄.
//El formato de entrada es especial, ya que indica el número de regalos y el tipo de regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos a y 11 regalos b./
//Los elfos tienen un sistema especial para organizar los regalos:
//- Cada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. Por ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.
//- Cada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas de a se apilan en 2 palés de esta manera: [a][a]
//- Cualquier regalo adicional se coloca en una bolsa, representada por () y se colocan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)
//Los regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los regalos aparecen en el mismo orden que la cadena de entrada.
//Tu tarea es escribir una función organizeGifts que tome una cadena de regalos como argumento y devuelva una cadena representando el almacén.

function organizeGifts(gifts) {
    let storage = ''
    const regex = /\d+[a-z]/g
    let gift_list = gifts.match(regex)
    
    for (const gift of gift_list) {
      const number = gift.substr(0, gift.length - 1)
      const letter = gift.substr(-1)

      let num_boxes = Math.trunc(number / 10)
      const num_bags = number % 10
      const num_palets = Math.trunc(num_boxes / 5)
      num_boxes = num_boxes - (num_palets * 5)

      const str_palets = (num_palets > 0) ? `[${letter}]`.repeat(num_palets) : ''
      const str_boxes = (num_boxes > 0) ? `{${letter}}`.repeat(num_boxes) : ''
      const str_bags = (num_bags > 0) ? '(' + `${letter}`.repeat(num_bags) + ')' : ''

      storage = storage + str_palets + str_boxes + str_bags
    }
    return storage
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

const result2 = organizeGifts(`20a`)
console.log(result2)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos, resultando en 1 palé [a] (por las primeras 5 cajas), 2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)*/
