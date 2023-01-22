const container = document.querySelector('#container')
const row = document.createElement('div');
row.classList.add('row')
document.body.onload = () => {
    fetch(`https://fakestoreapi.com/products`)
        .then((response) => response.json())
        .then((data) => renderProducts(data))
}

function renderProducts(data) {

    data.forEach((product) => {
        row.innerHTML += `
            <div class="col-md-12 mt-5 shadow rounded ">
                <div class="card border-0  p-3">
                    <div class="row align-items-center">
                         <img src="${product.image}" class="col-md-3" alt="" height="300">
                        <div class="card-body col-md-8">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <p class="card-text fw-bold">$${product.price} </p>
                        </div>
                    </div>
                </div>
            </div>
    `
    });

}
container.appendChild(row)

