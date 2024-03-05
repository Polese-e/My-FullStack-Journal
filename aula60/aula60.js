/* Um ato de uma função invocando a si mesma. A recursão é usada para resolver 
problemas que contêm subproblemas menores. Uma função recursiva pode receber 
dois inputs (entradas): um caso base (termina a recursão) ou um caso recursivo 
(continua a recursão). */

function recursiva(max) {
  console.log(max);
  if (max >= 100) return;
  max++;
  recursiva(max);
}

recursiva(0);