const container = document.querySelector('#container')
let dataLength;
let page = 1
document.body.onload = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${page}`)
        .then(response => response.json())
        .then(data => renderPhotos(data));
}

function renderPhotos(data) {
    const photos = document.createElement('div');
    photos.className = 'row'
    dataLength = data.length
    data.forEach(photo => {
        photos.innerHTML += `
        <div class="col-md-5">
        <img class="img-fluid" src="${photo.url}" alt="${photo.title}" />
        </div>
        `
    });
    container.appendChild(photos)
}

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollable) {
        page += 1 
        fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${page}`)
            .then(response => response.json())
            .then(data => renderPhotos(data));
        
    }
})