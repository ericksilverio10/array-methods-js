const data = [
    {name: "Matheus", age: 18, sallary: 1300, driverLicense: true},
    {name: "Erick", age: 18, sallary: 5800, driverLicense: false},
    {name: "Cesar", age: 19, sallary: 3300, driverLicense: false},
    {name: "Vinicius", age: 30, sallary: 6000, driverLicense: true},
    {name: "Rosangela", age: 56, sallary: 4000, driverLicense: true},
];

// 1- Reverse
// const reverseData = data.reverse();

// console.log(reverseData);

// 2- Find
const highSallary = 2000;

const highestSalary = data.find((user) => user.sallary > highSallary);

console.log(highestSalary);
// retorna apenas UM resultado

// 3 - FindIndex

const lowestSallary = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000);

console.log(lowestSallary);

data[lowestSallary].sallary += 200;

console.log(data[lowestSallary])

// 4 - Includes
const numbers = [1, 0, 4, 2, 5, 7];

const hasFour = numbers.includes(4);
const hasSix = numbers.includes(6);

console.log(hasFour);
// true

console.log(hasSix);
// false

// 5 - Map
data.map((user) => user.newsLetter = false);
console.log(data);