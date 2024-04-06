// JS for the liked images page



// Loads liked images from localStorage
window.onload = function() {
    const likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];
    const container = document.querySelector('.images');

    likedImages.forEach(url => {
        const img = document.createElement('img');
        img.src = url;

        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank'; // Open the image in a new tab
        a.appendChild(img);

        container.appendChild(a);
    });
};


// Gets the liked images and shows them in the website
likedImages.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    container.appendChild(img);
});


// Clears the localStorage containing liked images and reloads the page
function clearLikedImages() {
        localStorage.removeItem('likedImages');
        location.reload();
}


const url = "https://picsum.photos/200/300?random=1";

fetch(url)
    .then(response => {
        const img = document.createElement('img');
        img.src = url;
        document.body.appendChild(img);
    })
    .catch(error => console.log(error));