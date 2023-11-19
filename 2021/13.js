// ¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

// Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

// Sólo tienes que tener en cuenta unas cosillas ✌️:

// Si el array está vacío, devuelve un array vacío
// Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
// Por suerte, cada posición del array siempre tiene la misma longitud...

function wrapGifts(gifts) {
    let res = []
    if (gifts.length === 0){
        return []
    }
    const num_gifts = gifts[0].length
    res = res.concat(['*'.repeat(2+num_gifts)])
    gifts.forEach(function(gift){
        res = res.concat('*' + gift + '*')
    });
    res = res.concat(['*'.repeat(2+num_gifts)])
    return res
  }


console.log(wrapGifts(["📷", "⚽️"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]))
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/