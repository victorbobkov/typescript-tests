function add(n1: number, n2: number) {
    return n1 + n2
}

// print result type is void, means function doesn't return anything, it doesn't have a return statement
function printResult(num: number) {
    console.log('Result '+ num)
}

printResult(add(5, 12))

// Functions as Types
let combineValues: (a: number, b: number) => number

combineValues = add
// combineValues = printResult
// combineValues = 5

console.log(combineValues(8,8))