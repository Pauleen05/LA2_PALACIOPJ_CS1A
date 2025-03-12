// C1-A2 Mathematical and Comparison Operations, and Type Conversions.

// 1. Develop a program initializing 4 variables [ a,b,c,d ] and 1 constant [ e ], store the following values:
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;

// 2. 
// a. Display the sum of the declared variables [ a,b,c,d ] and constant [ e ] combined.
let sum = a + b + c + parseInt(d) + e; // Using parseInt to convert string (d) into an integer
console.log("Sum of a, b, c, d, e:", sum);

// b. Compare the values of variable d and constant e using relational operations [ >,<,=>,<=, and ===], then display the results.
console.log("d > e:", (d > e));
console.log("d < e:", (d < e));
console.log("d >= e:", (d >= e));
console.log("d <= e:", (d <= e));
console.log("d === e:", (d === e));

// c. Declare new variables to store the result/s of the following operations, then after, display the results:
// 1. Subtrac all the values of the declared variables
let subtraction = a - b - c - parseInt(d);
console.log("Result of subtracting all variables:", subtraction);

// 2. Multiply the values of variable a and c , divided by constant e.
let multiplicationDivision = ( a * c ) / e;
console.log("Result of multiplying a and c, divided by constant e:", multiplicationDivision);

// 3. Display the exponent value of constant e raise to the power of variable c.
let exponent = e ** c;
console.log("Result of e raised to the power of c:", exponent);

// 4. Reassign the value of c.3 to constant e, then display the result. 
let newE = c;
console.log("Result of reassigning c to e:", newE);
