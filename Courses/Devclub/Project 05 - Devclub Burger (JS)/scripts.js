const list = document.querySelector("ul")
const buttonShowAll = document.getElementById("show-all")
const buttonMapAll = document.getElementById("map-all")
const buttonSumAll = document.getElementById("sum-all")
const buttonFilterAll = document.getElementById("filter-all")

function formatCoin(value) {
    return newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}

function showAll(productsArray) {
    let myLI = ""
    productsArray.forEach((product) => {
        myLI += `
        <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">${formatCoin(product.price)}</p>
        </li>
        `
    })
    list.innerHTML = myLI
}

function mapAll() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, //dar 10% de desconto
    }))
    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
        <li>
            <p>O Valor Total Dos Itens É: <br> ${formatCoin(totalValue)}</p>
        </li>
        `
}

function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterJustVegan)
}


buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAll)
buttonSumAll.addEventListener("click", sumAllItems)
buttonFilterAll.addEventListener("click", filterAllItems)