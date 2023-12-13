// Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

// . = Carretera
// S = Trineo de Santa
// * = Barrera abierta
// | = Barrera cerrada
// Ejemplo de carretera: S...|....|.....

// Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.
// Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.
// Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

// El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.
// Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.
// Los elfos se inspiraron en este reto de Code Wars.

function cyberReindeer(road, time) {
    const result = []
    let previous = '.'
    let position = 0

    function replace_char(str, i, char){
        return str.substring(0, i) + char + str.substring(i + 1);
    }

    for (let sec = 0; sec < time; sec++) {
        result.push(road);
        if (sec === 4) road = road.replaceAll('|', '*') // Cuando llega a 5 segundos se abren las barreras
        if (road[position + 1] !== '|'){
            road = replace_char(road, position, previous) // Escribo el paso que habia
            previous = road[position + 1] //Guardo el siguiente paso
            road = replace_char(road, position + 1, 'S') // Muevo la S al siguiente paso
            position++
        }
    }
    return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time))

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/