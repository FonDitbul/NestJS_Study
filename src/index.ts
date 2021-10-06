class Human{
    public name: string;
    public age:number;
    public gender:string;
    constructor(name:string, age:number, gender?:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 24, "female")

const person = {
    name: "gweongi",
    age: 24,
    gender: "male"
}

const sayHi = (person: Human): string=> {
    return `Hello ${person.name}, your are ${person.age}, your are a ${person.gender}!`
}

console.log(sayHi(person));
console.log(sayHi(lynn));

export{};