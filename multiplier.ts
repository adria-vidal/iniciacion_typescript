const multiplicador = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};

//funcion para especificar más concretamente el tipo de resultado
//asi typeScript sabe que el tipo que retornará es un Array de numeros
//y saltará error sino lo es

const parseArguments = (args): Array<number> => {
  if (args.length !== 4) throw new Error('Wrong number of arguments');

  const firstNumber = Number(args[2]);
  const secondNumber = Number(args[3]);
  if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    return [firstNumber, secondNumber];
  }
  throw new Error('Provided value swere not numbers');
};
const cleanArguments = parseArguments(process.argv);

/* Para utilizar process.argv he tenido que instalar los tipados 'npm install --save-dev @types/node
 */
const a: number = Number(cleanArguments[0]);
const b: number = Number(cleanArguments[1]);

multiplicador(a, b, `Multiplied ${a} and ${b} result is: `);
