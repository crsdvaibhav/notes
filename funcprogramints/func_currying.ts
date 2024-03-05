function normal_sum(a: number, b: number): number {
    return a + b;
}

type Sum = (a: number) => (b: number) => number;
const sum: Sum = (a) => (b) => a + b;

console.log(sum(1)(2));

//Defining helper funtions
type Increment = (x: number) => number;
const increment: Increment = sum(1); //sum(1) is a function with a=1, which will cause the increment
console.log(increment(2));

//Defining curry function for 2 var
type Curry2 = <A, B, C>(f: (a: A, b: B) => C) => (a: A) => (b: B) => C;
const curry2: Curry2 = (f) => (a) => (b) => f(a, b);
const sum2 = curry2(normal_sum);
console.log(sum2(1)(2));
