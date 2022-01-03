const API_PRODUTS = "http://localhost:4000/produts"
const API_PRODUTS_EDIT = "http://localhost:4000/produts/"
const box_container = document.getElementById('box-container')
let car = JSON.parse(localStorage.getItem('car')) || []

const getProduts = async (produts) => {
    const busq = await fetch(produts);
    const data = await busq.json()
    showProduts(data);
}

getProduts(API_PRODUTS);

const showProduts = (produts) => {
    box_container.innerHTML = ''
    produts.forEach(element => {
        const { id, nombre, precio, precioInicial, descuento, image } = element
        const box = document.createElement('div')
        box.classList.add('box');
        box.innerHTML = `
        <span class="discount">${descuento}</span>
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <img src="${image}"
                    alt="">
                <h3>${nombre}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price"> ${precio} <span> ${precioInicial} </span> </div>
                <a href="#" class="btn" id="${id}" onclick="Agregar(${id})">Añadir al carrito</a>
        `
        box_container.appendChild(box)

    });
}

const Agregar = async (idP) => {
    let addProduct = await fetch(API_PRODUTS_EDIT)
    let dataProdut = await addProduct.json();

    searchProduct = dataProdut.find(product => product.id == idP)
    const { id, nombre, precio, precioInicial, descuento, image } = searchProduct

    const carProduct = {
        id: id,
        nombre: nombre,
        precio: precio,
        image: image,
        cantidad: 1,
    }

    car.unshift(carProduct)
    localStorage.setItem('car', JSON.stringify(car));
    getLocalstorage();
}

