// Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
//
// Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su
// nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
]

function contarOvejas(ovejas) {
    // aquí tu magia
    const filtered = ovejas.filter(function (oveja) {
        const lower_name = oveja.name.toLowerCase()
        if (
            oveja.color === 'rojo' &&
            lower_name.includes('n') &&
            lower_name.includes('a')
        ) {
            return oveja
        }
    })
    return filtered
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)
//[
//  { name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }
//]
