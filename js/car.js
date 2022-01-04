let car = JSON.parse(localStorage.getItem('car')) || []
const boxContainer = document.getElementById('box-container')
const totalPay = document.getElementById('total-pay')

document.addEventListener('DOMContentLoaded', () => {
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
    total();
})


const Delete = (idP) => {
    const selectProduct = product => product.id !== idP;
    const deleteProduct = car.filter(selectProduct);

    car = deleteProduct;
    localStorage.setItem('car', JSON.stringify(car));
    window.location.reload();
}

const total = () => {
    let total = car.reduce((sum, value) => (typeof value.precio == "number" ? sum + value.precio : sum), 0)
    totalPay.innerHTML += `<h3>Total a pagar: ${total}</h3>`
}