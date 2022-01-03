let car = JSON.parse(localStorage.getItem('car')) || []
const boxContainer = document.getElementById('box-container')


car.forEach(element => {
    const { cantidad, id, image, nombre, precio } = element
    boxContainer.innerHTML = ""
    boxContainer.innerHTML = `
        <img src="${image}" alt="">
        <h3 id="${id}">${nombre}</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <div class="price"> ${precio}</div>
        <div class="price"> ${cantidad}</div>
    `
});