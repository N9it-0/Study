const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector("#currency-select-cvt")



async function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector("#currency-value-to-convert")
    const currencyValueConverted = document.querySelector("#currency-value-converted")

    //async await
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())
    //JS will stop, execute this code, and continue the flow, rather than it executing later and erroring.
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const BitoinToday = data.BTCBRL.high

    // let dolarToday = 5.06
    // let euroToday = 5.88
    // let libraToday = 6.81

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
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = "₿ " + new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / BitoinToday)
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
    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitoin"
        currencyImage.src = "./img/Coins/BTC.png"
    }
    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertValues) 