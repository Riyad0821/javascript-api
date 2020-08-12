class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Shhed', 'alam', 50000);
console.log(friendlyPerson);

//old style

// function Person1(firstName, lastName, salary){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
// }
// const oldPerson = new Person1('Grand', 'Papa', 12000);
// console.log(oldPerson);