// const person: {
//     name: string
//     age: number
// } = {
const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // tuple type - fixed length array as well as fixed types
} = {
    name: 'Ben',
    age: 19,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}

// person.role.push('admin')
// person.role[1] = 10

let favoriteActivities: string[]
favoriteActivities = ['Sports']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) // error
}

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

