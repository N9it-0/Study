/* 
    node ==> module.exports
    Web ==> window
        global ==> window

    THIS
    'this' makes the refence:
    Global Scope:
        this ==> functions as module.exports
    Local Scope:
        this ==> global || ex: this.console.log("now I'm global")
        If it's inside a object this ==> references as a name caller.
    WEB:
        this ==> references the window.

*/
//EX:.
const person2 = require("./ObjAndFuncs")

const person = {
    name: "Eris",
    age: 15,
    talk: function () {
        console.log(this.name)
        // This references the entire person variable.
    }
}

function myFunction() {
    this.console.log("In Here I'm just 'global.' haha!")
}

console.log(person2)
person.talk()
myFunction()