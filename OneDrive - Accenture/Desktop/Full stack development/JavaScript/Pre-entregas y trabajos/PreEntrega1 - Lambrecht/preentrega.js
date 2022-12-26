/*
Este pequeño código sirve para crear un sistema de turnos en un hospital.

Primero le solicito al usuario que ingrese que día va a necesitar un turno:
    1 - Hoy: El sistema le solicitará que ingrese si es urgente la consulta o no. En caso de ser urgente y el tiempo
        de espera menor a 30 minutos, aparece un cartel que indica el tiempo de espera. En caso de ser urgente y el
        tiempo de espera mayor a 30 minutos, el sistema le sugiere ir a otro hospital. En caso de no ser urgente, el
        sistema le indicará el tiempo de espera. 

        **El tiempo de espera es una función que indica los minutos actuales para simplificar el programa
    
    2 - Mañana: Se realiza un acumulado en función de los turnos que se van asignando y el sistema indica el tiempo
        de espera en caso de haber sobre sobreturnos. Cada turno representa 15 minutos de consulta y con ello se calcula
        la demora. Cuando la demora es posterior a 45 minutos (3 turnos), el sistema sugiere elegir otra hora

*/

//Funcion ficticia para calcular el tiempo de espera segun los minutos actuales 
const d = new Date();
let i = 1
function tiempo_de_espera(){
    let minutos = d.getMinutes()
    return minutos
}

//Variables que servirán para acumular los turnos para mañana
let a = 0
let b = 0
let c = 0
let e = 0

//Comienzo del input por parte del usuario
let fecha = prompt("Ingrese el día en el que desea solicitar un turno:\n1-Hoy\n2-Mañana")
fecha = parseInt(fecha)

switch(fecha)
{
    case 1:
        let turno_hoy = prompt("Usted ha seleccionado la opción 1, es decir que necesita un turno hoy. Seleccione si es urgente o no:\n1-Es urgente\n2-No es urgente")
        turno_hoy = parseInt(turno_hoy)
        let espera = tiempo_de_espera()
            if (turno_hoy == 1){
                if (espera <= 30)
                {
                    alert("¡Atención!, existe una espera de: "+tiempo_de_espera()+" minutos. Lo esperamos.")
                }
                else{
                    alert("Debido a que el tiempo de espera es mayor a 30 minutos ("+espera+" minutos), le sugerimos que se diriga a otro hospital")
                }
            }
            else{
                alert("¡Atención!, existe una espera de: "+tiempo_de_espera()+" minutos. Lo esperamos.")
            }
    break
    case 2:
        while (true){
            let turno_manana = prompt("Usted ha seleccionado la opción 2, es decir que necesita un turno mañana. Seleccione el horario que desee:\n1-9 am\n2-10 am\n3-11 am\n4-12 am")
            turno_manana = parseInt(turno_manana)
            switch(turno_manana)
            {
                case 1:
                    if (a<4){
                    alert("¡Muchas gracias por su reserva!\nUsted ha reservado un turno para mañana a las 9am. El tiempo de espera es de: "+a*15+" minutos")
                    a++
                    break
                    }
                    else{
                        alert("El tiempo de espera es superior a 45 minutos. Por favor seleccione otra hora")
                        break
                    }
                case 2:
                    if (b<4){
                        alert("¡Muchas gracias por su reserva!\nUsted ha reservado un turno para mañana a las 10am. El tiempo de espera es de: "+b*15+" minutos")
                        b++
                        break
                        }
                        else{
                            alert("El tiempo de espera es superior a 45 minutos. Por favor seleccione otra hora")
                            break
                        }
                case 3:
                    if (c<4){
                        alert("¡Muchas gracias por su reserva!\nUsted ha reservado un turno para mañana a las 11am. El tiempo de espera es de: "+c*15+" minutos")
                        c++
                        break
                        }
                        else{
                            alert("El tiempo de espera es superior a 45 minutos. Por favor seleccione otra hora")
                            break
                        }
                case 4:
                    if (e<4){
                        alert("¡Muchas gracias por su reserva!\nUsted ha reservado un turno para mañana a las 12am. El tiempo de espera es de: "+e*15+" minutos")
                        e++
                        break
                        }
                        else{
                            alert("El tiempo de espera es superior a 45 minutos. Por favor seleccione otra hora")
                            break
                        }
                default:
                    alert("Opción inválida")
                break
            }
            let nueva_reserva = prompt("Desea reservar un nuevo turno:\n1-Si\n2-No")
            nueva_reserva = parseInt(nueva_reserva)
            if (nueva_reserva == 2){
                break
            }
            else if ((nueva_reserva != 1) && (nueva_reserva != 2)){
                alert("Numero inválido")
            }
            else{
            }
        }
}

