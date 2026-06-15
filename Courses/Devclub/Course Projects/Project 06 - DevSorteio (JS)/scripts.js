const resNumHtml = document.querySelector("#result-num")

function genNu(){
    const min = Math.ceil(document.querySelector("#min-input").value)
    const max = Math.floor(document.querySelector("#max-input").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    resNumHtml.innerHTML = result
}