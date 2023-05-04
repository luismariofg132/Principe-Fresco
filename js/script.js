const API_PRODUTS = "https://apipf.lfrancodev.com/produts"
const API_PRODUTS_EDIT = "https://apipf.lfrancodev.com/produts/"
const box_container = document.getElementById('box-container')
let car = JSON.parse(localStorage.getItem('car')) || []

// Peticion a la api
const getProduts = async (produts) => {
    const busq = await fetch(produts);
    const data = await busq.json()
    showProduts(data);
}

getProduts(API_PRODUTS);

// Mostrar los poductos en el html
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
                <img src="${image}" alt="">
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

// agrega un producto al carrito
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

    // alerta
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Producto añadido al carrito'
    })
}

