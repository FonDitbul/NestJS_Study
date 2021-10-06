"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human("Lynn", 24, "female");
const person = {
    name: "gweongi",
    age: 24,
    gender: "male"
};
const sayHi = (person) => {
    return `Hello ${person.name}, your are ${person.age}, your are a ${person.gender}!`;
};
console.log(sayHi(person));
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map