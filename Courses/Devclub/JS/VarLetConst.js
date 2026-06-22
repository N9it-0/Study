
// VAR x LET x CONST

var MyVar = "hello!"
// Global scope, even if it was created in a local scope.
/* - ex: if (true) {var MyVar = "hello!"} console.log(MyVar)
return will be "hello!" */
//Value can be altered.

let MyLet = "Olá!"
// Local scope.
/* - ex: if (true) {lef MyLet = "Olá!"} console.log(MyLet)
return will be null. */
//Value can be altered.

const MyConst = "Ohayo!"
// Local scope.
/* - ex: if (true) {lef MyConst = "Ohayo!"} console.log(MyConst)
return will be null. */
//Value can't be altered. Unless it's object parameters.