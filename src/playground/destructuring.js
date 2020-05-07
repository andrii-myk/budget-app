// const person = {
//     name: 'Andrew',
//     age: 28,
//     location: {
//         planet: 'Mars',
//         temp: 234
//     }
// }

// const { name = 'Anonymous', age } = person
// console.log(`${person.name} is ${person.age}`);

// const { planet, temp: t } = person.location
// console.log(`${name} is ${age}`);
// console.log(`It's ${t} in ${planet}`);


// const book = {
//     title: '1984',
//     author: 'George Orwell',
//     publisher: {
//         name: 'Babylonlib'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName);


// Array destructing

const address = ['22 Lypova', 'Zp', 'Ukraine', '71000']

const [, city, state] = address

console.log(`You are in ${city} ${state}`);
