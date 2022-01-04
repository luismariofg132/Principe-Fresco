let car = JSON.parse(localStorage.getItem('car')) || []
const boxContainer = document.getElementById('box-container')
const totalPay = document.getElementById('total-pay')
const formPay = document.getElementById('formPay')

// Al cargar la pagina muestra los productos que hay en el local storage 
document.addEventListener('DOMContentLoaded', () => {
    car.forEach(element => {
        const { cantidad, id, image, nombre, precio } = element
        const box = document.createElement('div')
        box.classList.add('box');
        box.innerHTML += `
            <img src="${image}" alt="">
            <h3 id="${id}">${nombre}</h3>
            <div class="price"> ${precio}</div>
            <div class="price">Cantidad ${cantidad}</div>
            <button onclick="Delete(${id})" class="btn">Eliminar</button>
        `
        boxContainer.appendChild(box)
    });
    total();

})

// Eliminar productos del carrito 
const Delete = (idP) => {
    const selectProduct = product => product.id !== idP;
    const deleteProduct = car.filter(selectProduct);

    car = deleteProduct;
    localStorage.setItem('car', JSON.stringify(car));
    window.location.reload();
}

// Calcula total a pagar 
const total = () => {
    let total = car.reduce((sum, value) => (typeof value.precio == "number" ? sum + value.precio : sum), 0)
    totalPay.innerHTML += `<h3>Total a pagar: ${total}</h3>`
}

// Registro del pago
formPay.addEventListener('submit', (e) => {
    e.preventDefault();

    let numberCard = document.getElementById('number-card').value;
    let fullName = document.getElementById('full-name').value;
    let expirationDate = document.getElementById('expiration-date').value;
    let securityCode = document.getElementById('security-code').value;

    const lastPaymentData = {
        NumberCard: numberCard,
        FullName: fullName,
        ExpirationDate: expirationDate,
        SecurityCode: securityCode
    }
})