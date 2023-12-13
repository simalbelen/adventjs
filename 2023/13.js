// Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.
// Para ello te pasan un array con la duración de cada entrega. El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.
// Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.
// Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00

function calculateTime(deliveries) {
    const epochTime = new Date('01-01-1970 07:00:00');
    const date2 = new Date('01-01-1970 -03:00:00');

    console.log(seconds_to_time_str((epochTime-date2)/1000))
}

function seconds_to_time_str(seconds){
            let negative = seconds < 0
            if (negative) seconds = -seconds
            hours = truncate_number_as_str(seconds/3600)
            const min_and_sec = seconds % 3600
            minutes = truncate_number_as_str(min_and_sec / 60)
            seconds = truncate_number_as_str(min_and_sec % 60)
    
            const response = hours + ':' + minutes + ':' + seconds
            return negative ? '-' + response : response
        }
    
        function truncate_number_as_str(num){
            let str_num = (num|0).toString()
            return str_num.length === 2 ? str_num : '0' + str_num 
        }



// function calculateTime(deliveries) {
//     let remaining_time = 25200 // '07:00:00' to seconds

//     let time_sum = deliveries.reduce((accum, delivery) => {
//         return accum + time_str_to_seconds(delivery)
//     }, 0)

//     return seconds_to_time_str(time_sum - remaining_time)

//     function time_str_to_seconds(time_str){
//         let [hours, minutes, seconds] = time_str.split(':')
//         return (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds)
//     }

//     function seconds_to_time_str(seconds){
//         let negative = seconds < 0
//         if (negative) seconds = -seconds
//         hours = truncate_number_as_str(seconds/3600)
//         const min_and_sec = seconds % 3600
//         minutes = truncate_number_as_str(min_and_sec / 60)
//         seconds = truncate_number_as_str(min_and_sec % 60)

//         const response = hours + ':' + minutes + ':' + seconds
//         return negative ? '-' + response : response
//     }

//     function truncate_number_as_str(num){
//         let str_num = (num|0).toString()
//         return str_num.length === 2 ? str_num : '0' + str_num 
//     }
// }

console.log(calculateTime([
    '00:10:00',
    '01:00:00',
    '03:30:00'
]))
// '-02:20:00'

console.log(calculateTime([
    '02:00:00',
    '05:00:00',
    '00:30:00'
]))
// '00:30:00'

console.log(calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
])) // '-05:29:00'