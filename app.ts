// const person: {
//     name: string
//     age: number
// } = {
const person = {
    name: 'Ben',
    age: 19
}

console.log(person.name)

// Object types can also be created for nested objects
const product: {
    id: string;
    price: number;
    tags: string[],
    details: {
        title: string;
        description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

