const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector("#currency-select-cvt")

function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector("#currency-value-to-convert")
    const currencyValueConverted = document.querySelector("#currency-value-converted")
    
    let dolarToday = 5.06
    let euroToday = 5.88
    let libraToday = 6.81

    if (currencySelect.value == "dolar") {
        //Se o valor do select for verdadeiro, esse código é executado.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        //Se o valor do select for verdadeiro, esse código é executado.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        //Se o valor do select for verdadeiro, esse código é executado.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("img-cc")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/Coins/USD.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/Coins/EUR.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./img/Coins/LIB.png"
    }
    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues) 