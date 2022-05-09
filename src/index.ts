//EJERCICIO "SUMA ENTRE NUMEROS"

let numero1: number = Number(prompt("Por favor, ingrese el primer número: "));
let numero2: number = Number(prompt("Por favor, ingrese el segundo número:"));
let resultado: number = 0;

for (numero1; numero1 <= numero2; numero1++) {
  resultado = resultado + numero1;
}
console.log("El resultado es: ", resultado);
