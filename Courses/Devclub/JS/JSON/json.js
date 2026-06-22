/*  JSON - JavaScript Object Notation
    - Padrão de troca e armazenamento de informações
    - Padrão lógico simples
    - Leve para ser enviado e recebido
    Simples e fácil de entender
    - Derivado do JavaScript
    - Utiliza o formato chave / valor
*/
const a = document.querySelector("p")
const b = document.querySelector("button")
const user = {
    nome: "Beatrice",
    idade: 400,
    Mãe: "Echidna",
    hobbies: ["Ler", "Brincar Com Puck", "Receber Carinho do Subaru"],
    Contratante: "Subaru",
    Relação: "O escolheu"

}

const userJSON = JSON.stringify(user)
const userJSONtoJS = JSON.parse(userJSON)
console.log(userJSONtoJS)

function print() {
    a.innerHTML = userJSON
}
function print2() {
    let html = ""
    for (let chave in user) {
        html += `${chave}: ${user[chave]}<br>`
    }
    a.innerHTML = html
}

