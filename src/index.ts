interface Human{
    name:string,
    age:number,
    gender:string
}

const person = {
    name: "gweongi",
    age: 24,
    gender: "male"
}

const sayHi = (person: Human): string=> {
    return `Hello ${person.name}, your are ${person.age}, your are a ${person.gender}!`
}

console.log(sayHi(person));


export{};