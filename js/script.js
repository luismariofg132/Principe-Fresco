const API_PRODUTS = "https://luismariofg132.github.io/Principe-Fresco/data/dbProductos.json"
const box_container = document.getElementById('box-container')


const getProduts = (produts) => {
    const peticion = fetch(produts);
    peticion
        .then((resp) => resp.json())
        .then((data) => showProduts(data.produts))
        .catch(err => console.log(err))
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
                <a href="#" class="btn">add to cart</a>
        `
        box_container.appendChild(box)

    });
}