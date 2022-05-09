// The unknown Type, can be stored any input
// unknown is a bit more restrictive than any

let userInput: unknown
let userName: string
userInput = 5
userInput = 'Max'

// wouldn't work without if check
if (typeof userInput === 'string') {
   userName = userInput
}

// unknown is a better choice over any, to have at least some type checking
// if possible something like union type is better than unknown

// never is another type functions can return

// this function never produces a value and never returns anything
function generateError(message: string, code: number): never {
   throw {
      message: message, errorCode: code
   }
}

generateError('An error occured!', 500)