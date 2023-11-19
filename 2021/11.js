// Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.
//
// Mi cine favorito tiene dos posibilidades:
// • Entrada de un sólo uso: Cuesta 12$ por cada película.
// • Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.
//
// Necesito una función que, al pasarle las veces que voy a ir al cine, me diga si vale la pena comprar la tarjeta fidelidad o no.
// La dificultad del reto está en encontrar una fórmula sencilla que nos diga el precio con descuento acumulado para la tarjeta fidelidad. 😜

// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

const entrance_fee = 12 //$
const fidelity_fee = 250 //$

function shouldBuyFidelity(times) {
    let entrance_cost = entrance_fee * times
    let fidelity_cost = fidelity_fee

    for (let i = 1; i <= times; i++) {
        fidelity_cost += entrance_fee * (0.75 ** i)
    }
    return fidelity_cost < entrance_cost
}

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad
