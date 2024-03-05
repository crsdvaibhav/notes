// Funtion 1
type Increment = (x: number) => number;
const increment: Increment = (x) => x + 1;

console.log(increment(2));

//Function 2
type ToString = (x: number) => string;
const tostring: ToString = (x) => `"${x}"`;

console.log(tostring(3));

//Composing (Generics, helped generalize this compose function)
type Compose = <A, B, C>(f: (x: B) => C, g: (x: A) => B) => (x: A) => C;
const compose: Compose = (f, g) => (x) => f(g(x));
const increment_toString = compose(tostring, increment); //keep in mind which to put out should go first

console.log(increment_toString(2));
