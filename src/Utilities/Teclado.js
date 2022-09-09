import { question } from 'readline-sync';

class Teclado {
  static leerNumero(msg) {
    let value = question(msg);
    return Number(value);
  }

  static leerHora(msg) {
    console.log(msg);
    return [
      Teclado.leerNumero(" -> horas: "),
      Teclado.leerNumero(" -> minutos: "),
      Teclado.leerNumero(" -> segundos: ")
    ]
  }
}

export default Teclado;