"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "gweongi",
    age: 24,
    gender: "male"
};
const sayHi = (person) => {
    return `Hello ${person.name}, your are ${person.age}, your are a ${person.gender}!`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map