
/*Podemos crear nuestros propios tipados como number,string, etc.
Operation consiste en que el tipo solo puede tener esas 3 palabras
*/
type Operation = 'multiply' | 'add' | 'divide';
const calculator = (a: number, b: number, op: Operation): number => {
  if (op == 'multiply') return a * b;
  if (op == 'add') return a + b;
  if (op == 'divide') if (b === 0) 'no se puede dividir entre 0';
  return a / b;
};
const result = calculator(1, 2, 'add');
console.log(result);
