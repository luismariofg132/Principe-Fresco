let car = JSON.parse(localStorage.getItem('car')) || []
const boxContainer = document.getElementById('box-container')

car.forEach(element => {
    const { cantidad, id, image, nombre, precio } = element
    boxContainer.innerHTML += `
        <img src="${image}" alt="">
        <h3 id="${id}">${nombre}</h3>
        <div class="price"> ${precio}</div>
        <div class="price">Cantidad ${cantidad}</div>
        <button onclick="Delete(${id})">Eliminar</button>
    `
});

const Delete = (idP) => {
    const selectProduct = product => product.id !== idP;
    const deleteProduct = car.filter(selectProduct);

    car = deleteProduct;
    localStorage.setItem('car', JSON.stringify(car));
    window.location.reload();
}