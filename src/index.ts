import { Bernoulli } from './bernoulli';

let bernoulli = new Bernoulli();

let input = 8; // n
let output = bernoulli.calculate(input);

let numerator = isNaN(output[0]) ? 0 : output[0];
let denominator = isNaN(output[1]) ? 0 : output[1];

console.log('Input n: ', input);
console.log('Output numerator: ', numerator);
console.log('Output denominator: ', denominator);
