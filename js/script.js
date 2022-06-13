const data = [
    {name: "Matheus", age: 18, sallary: 2000, driverLicense: true},
    {name: "Erick", age: 18, sallary: 5800, driverLicense: false},
    {name: "Cesar", age: 19, sallary: 3300, driverLicense: false},
    {name: "Vinicius", age: 30, sallary: 6000, driverLicense: true},
    {name: "Rosangela", age: 56, sallary: 4000, driverLicense: true},
];

// 1- Reverse
const reverseData = data.reverse();

console.log(reverseData);

// 2- Find
const highSallary = 2000;

const highestSalary = data.find((user) => user.sallary > highSallary);

console.log(highestSalary);
// retorna apenas UM resultado