function normal_sum(x: number[]): number {
    let result = 0;
    for (let i = 0; i < x.length; i++) {
        result += x[i];
    }
    return result;
}

console.log(normal_sum([1, 2, 3]));

// Without loops as in FP
type SumAll = (x: number[]) => number;
const sum_all: SumAll = (x) => {
    if (x.length === 0) {
        return 0;
    }

    //Get head and tail
    const [head, ...tail] = x;
    return head + sum_all(tail);
};

console.log(sum_all([1, 2, 3]));

//The gigachad way
const sum_all2: SumAll = (x: number[]) =>
    x.length === 0 ? 0 : x[0] + sum_all2(x.slice(1));

console.log(sum_all2([1, 2, 3]));
