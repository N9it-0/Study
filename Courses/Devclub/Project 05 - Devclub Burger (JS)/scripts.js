const list = document.querySelector("ul")
const buttonShowAll = document.getElementById("show-all")
const buttonMapAll = document.getElementById("map-all")

function showAll(productsArray) {
    let myLI = ""
    productsArray.forEach((product) => {
        myLI += `
        <li>
        <img src=${product.src}>
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
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

buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAll)