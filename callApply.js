const normalPerson = {
    firstName: 'Mohammad',
    lastName: 'Riyad',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }

}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000

}
const friendlyPerson = {
    firstName: 'Shahed',
    lastName: 'Islam',
    salary: 50000
}
//normalPerson.chargeBill();
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// heroBillCharge(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 5000, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 400, 50, 5);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 400, 40, 4);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 200, 20]);
console.log(heroPerson.salary);