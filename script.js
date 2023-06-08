let green = document.getElementById('green')
let black = document.getElementById('black')
let orange = document.getElementById('orange')

let productImage = document.getElementsByTagName('img')[0]
let productName = document.getElementById('name')
let productDetail = document.getElementById('detail')
let productCost = document.getElementById('cost')

let btnColor = document.querySelector('.buy-btn')

green.addEventListener('click', () => {
    productImage.setAttribute('src', './assets/gloves-green.jpg')
    btnColor.style.backgroundColor = '#52fe27'
    productName.innerHTML = "GUANTES DRB PRIME 22"
    productDetail.innerHTML = "Los Nuevos Guantes Prime 22 TR son el compañero ideal para llevar a los entrenamientos!"
    productCost.innerHTML = "$5.000"
})

orange.addEventListener('click', () => {
    productImage.setAttribute('src', './assets/gloves-orange.jpg')
    btnColor.style.backgroundColor = '#fe7427'
    productName.innerHTML = "GUANTES DRB PRIME 22"
    productDetail.innerHTML = "Los Nuevos Guantes Prime 22 TR son el compañero ideal para llevar a los entrenamientos!"
    productCost.innerHTML = "$7.000"
})

black.addEventListener('click', () => {
    productImage.setAttribute('src', './assets/gloves-black.jpg')
    btnColor.style.backgroundColor = 'black'
    productName.innerHTML = "GUANTES DRB LEADER 22 PRO"
    productDetail.innerHTML = "Poseen un Corte Negativo, el más técnico dentro de los tipos de corte."
    productCost.innerHTML = "$11.000"
})