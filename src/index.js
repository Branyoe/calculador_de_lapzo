import Teclado from './Utilities/Teclado.js';
import Utilidades from './Utilities/Utilidades.js';
function main() {
  console.clear();
  console.log('******[Calculador de horas]******\n');

  let horaLLegada;
  let horaSalida;

  do {
    horaLLegada = Teclado.leerHora("Hora de llegada (24)");
    horaSalida = Teclado.leerHora("Hora de Salida (24)");
    console.clear();

  } while (!Utilidades.validarHoras(horaLLegada, horaSalida));

  console.log(`Hora de llegada: ${Utilidades.formatearHora(horaLLegada)}`);
  console.log(`Hora de Salida: ${Utilidades.formatearHora(horaSalida)}`);

  console.log(
    `\nHoras calculadas: ${Utilidades.formatearHora(Utilidades.calcularHoras(horaLLegada, horaSalida))}`
  );
  if(Teclado.leerNumero('\nDesea continuar?(si: 1)\npara salir pulse cualquier tecla: ') === 1) main();
}

main();