const API_PRODUTS = "https://glacial-savannah-89462.herokuapp.com/produts"
const API_PRODUTS_EDIT = "https://glacial-savannah-89462.herokuapp.com/produts/"
const result = document.getElementById('box-container');
const bntSearch = document.getElementById('bntSearch');
const divEdit = document.getElementById('edit');
const bntAdd = document.getElementById('btnAdd');

// Carga del input id
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('id-product').style.display = 'none';
    document.getElementById('id-product').readOnly = true;
})

// Buscar
bntSearch.addEventListener('click', async (e) => {
    e.preventDefault();

    let idProduct = document.getElementById('id-product');
    let search = document.getElementById('search').value;
    let busq = await fetch(API_PRODUTS)
    let data = await busq.json()

    let buscar = data.find(product => product.nombre == search)
    const { id, nombre, precio, precioInicial, descuento, image } = buscar
    const box = document.createElement('div')
    box.classList.add('box');
    box.innerHTML = "";
    box.innerHTML += `
    <span class="discount">${descuento}</span>
        <img src="${image}" alt="">
        <h3>${nombre}</h3>
        <div class="price">Precio: ${precio} <span>Precio Inicial: ${precioInicial} </span> </div>
        <button class="btn" onclick="Delete()">Eliminar</button>
        <button class="btn" onclick="edit()">Editar</button>
    `
    idProduct.value = id
    result.appendChild(box)
})

// Agregar
bntAdd.addEventListener('click', async (e) => {
    e.preventDefault();

    let search = document.getElementById('search').value;
    let precio = document.getElementById('precioFinal').value;
    let precioFinal = document.getElementById('precioInicial').value;
    let descuento = document.getElementById('Descuento').value;
    let image = document.getElementById('image').value;

    let resp = await fetch(API_PRODUTS_EDIT, {
        method: 'POST',
        body: JSON.stringify({
            nombre: search,
            precio: precio,
            precioInicial: precioFinal,
            descuento: descuento,
            image: image
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })

    window.location.reload();
})

// Editar
const edit = async () => {
    let search = document.getElementById('search').value;
    let precio = document.getElementById('precioFinal').value;
    let precioFinal = document.getElementById('precioInicial').value;
    let descuento = document.getElementById('Descuento').value;
    let image = document.getElementById('image').value;
    let idProduct = document.getElementById('id-product').value;

    let resp = await fetch(API_PRODUTS_EDIT + idProduct, {
        method: 'PUT',
        body: JSON.stringify({
            id: idProduct,
            nombre: search,
            precio: precio,
            precioInicial: precioFinal,
            descuento: descuento,
            image: image
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    let data = resp.json()
    console.log(data)
    window.location.reload();
}

// Eliminar
const Delete = async () => {
    let idProduct = document.getElementById('id-product').value;

    let resp = await fetch(API_PRODUTS_EDIT + idProduct, {
        method: 'DELETE'
    })
    window.location.reload();
}