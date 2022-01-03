let car = JSON.parse(localStorage.getItem('car')) || []
const boxContainer = document.getElementById('box-container')

car.forEach(element => {
    const { cantidad, id, image, nombre, precio } = element
    boxContainer.innerHTML += `
        <img src="${image}" alt="">
        <h3 id="${id}">${nombre}</h3>
        <div class="price"> ${precio}</div>
        <div class="price"> ${cantidad}</div>
    `
});