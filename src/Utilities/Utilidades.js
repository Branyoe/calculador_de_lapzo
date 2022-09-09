export default class Utilidades{
  static formatearHora(hora = []) {
    return `${hora[0] < 10 ? '0' + hora[0] : hora[0]}:${hora[1] < 10 ? '0' + hora[1] : hora[1]}:${hora[2] < 10 ? '0' + hora[2] : hora[2]}`;
  }

  static calcularHoras(horaLLegada = [], horaSalida = []) {
    let [horasLLegada, minutosLLegada, segundosLLegada] = horaLLegada;
    let [horasSalida, minutosSalida, segundosSalida] = horaSalida;
  
    let horasTrabajadas = [];

    horasTrabajadas[0] = horasSalida - horasLLegada;
    horasTrabajadas[1] = minutosSalida - minutosLLegada;
    horasTrabajadas[2] = segundosSalida - segundosLLegada;

    if(horasTrabajadas[1] < 0 ){
      horasTrabajadas[1] += 60;
      horasTrabajadas[0] -= 1;
    } 

    if(horasTrabajadas[2] < 0){
      horasTrabajadas[2] += 60;
      horasTrabajadas[1] -= 1;
    }
  
    return horasTrabajadas;
  }

  static validarHoras(hora1 = [], hora2 = []){
    let [horas1, minutos1, segundos1] = hora1;
    let [horas2, minutos2, segundos2] = hora2;

    if(
      horas1 > 23 ||
      horas2 > 23 ||
      minutos1 > 59 ||
      minutos2 > 59 ||
      segundos1 > 59 ||
      segundos2 > 59
    ) return false;

    if(horas1 === horas2){
      if(minutos1 === minutos2){
        if(segundos2 < segundos1 ) return false;
      }
      if(minutos2 < minutos1) return false;
    }

    if(horas2 < horas1) return false;
    
    return true;
  }
}