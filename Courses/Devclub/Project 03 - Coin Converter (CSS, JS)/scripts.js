const convertButton = document.querySelector("#convert-button")

function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency")
    let dolarToday = 5
    let convertedValue = inputCurrencyValue.value / dolarToday
    console.log(convertedValue.toFixed(2))
}

convertButton.addEventListener("click", convertValues) 