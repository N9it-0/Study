/* 
    CLASSES
*/

class Person {
    constructor(name, age) {
        console.log(`Hello, my name is ${name} and I'm ${age} years old, I supose.`)
        this.name = name
        this.age = age
    }
    // name;
    // age;
    // talk() {console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`)}
}

const newPerson =  new Person("Beatrice", 400)
// newPerson.name = "Beatrice"
// newPerson.age = 400
// newPerson.talk()