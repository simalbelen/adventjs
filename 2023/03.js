function findNaughtyStep(original, modified) {
    for (let i = 0; i < original.length || i < modified.length ; i++) {
        const diff = original[i] != modified[i]
        if (diff && original[i] === modified[i+1]){
            return modified[i]
        } else if (diff && original[i+1] === modified[i]) {
            return original[i]
        }
    };
    return ''
}

// No falla porque si intentas acceder a una posicion que no existe de un array
// no lanza excepcion si no que devuelve undefined, que puedes comparar
const original1 = 'abcd'
const modified1 = 'abcde'
console.log(findNaughtyStep(original1, modified1)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // ''