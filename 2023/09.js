// Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!
// Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.
// Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

function adjustLights(lights) {
    let previous_first_red = '🟢'
    let num_changes_first_red = 0
    let previous_first_green = '🔴'
    let num_changes_first_green = 0
    
    for (const light of lights){
      //Empezando en rojo
      if (light === previous_first_red){
        num_changes_first_red++
        previous_first_red = (light === '🟢') ? '🔴' : '🟢'
      } else {
        previous_first_red = light
      }

      //Empezando en verde
      if (light === previous_first_green){
        num_changes_first_green++
        previous_first_green = (light === '🟢') ? '🔴' : '🟢'
      } else {
        previous_first_green = light
      }
    }
    
    return Math.min(num_changes_first_red, num_changes_first_green)
  }

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']))
// -> 1 (cambia la primera luz a verde)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
// -> 0 (ya están alternadas)

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1 (cambias la segunda luz a 🟢)