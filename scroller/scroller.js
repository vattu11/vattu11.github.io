// JS for image scroller page

// Ask the user for permission to to save their liked images to localStorage
window.onload = function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const declineCookiesButton = document.getElementById('decline-cookies');

    if(localStorage.getItem('cookiesAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }
    acceptCookiesButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'true');
    });
    declineCookiesButton.addEventListener('click', function() {
        cookieBanner.style.display = 'none';
        localStorage.setItem('cookiesAccepted', 'false');
        window.history.back();

    });
    

};

const card = document.querySelector(".card");

// API from here https://foodish-api.com/
const url = "https://foodish-api.com/api/";
let likedImages = JSON.parse(localStorage.getItem('likedImages')) || [];



async function getJSON(url) {
    // Fetch the data from the API link
    return fetch(url)
    // Catch error
    .then(response => {
        if (!response.ok) {
            throw new Error("Images not found");
        }
        return response.json();
    });
}



// Image element where the url is passed
function createImageElement(url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = "Image not found";
    return img;
}

function createLikeButton(img) {
    const likeButton = document.createElement('button');
    likeButton.innerHTML = '<i class="fas fa-heart"></i>';
    likeButton.className = 'like-button';

    // If the image is already liked
    if (likedImages.includes(img.src)) {
        likeButton.classList.add('clicked');
    }

    likeButton.addEventListener('click', function() {
        this.classList.toggle('clicked');
        if (this.classList.contains('clicked')) {

            // Like button is clicked
            likedImages.push(img.src);  // Add the image to the liked images array
        } else {
            // When a like button is unclicked
            const index = likedImages.indexOf(img.src);
            if (index > -1) {
                likedImages.splice(index, 1); // Remove the image from the array
            }
        }
        // Store the likedImages array in localStorage
        localStorage.setItem('likedImages', JSON.stringify(likedImages));
    });

    return likeButton;
}

// Comment button
function createCommentButton(div1, img) {
    const commentButton = document.createElement('button');
    // Icon from fontawesome 
    commentButton.innerHTML = '<i class="fas fa-comment-dots"></i>';
    commentButton.className = 'comment-button'; // 'comment-button' class to the comment button

    // When the comment button is clicked
    // Make a comment box appear
    commentButton.addEventListener('click', function() {
        let commentDiv = div1.querySelector('.comment-div');
        if (commentDiv) {
            // If the comment div already exists, hide it. This way the button works as toggle
            commentDiv.style.display = commentDiv.style.display === 'none' ? 'block' : 'none';
        } else {
            // If the comment div Isn't shown create it.
            commentDiv = document.createElement('div');
            commentDiv.className = 'comment-div'; // assign 'comment-div' class to the new div
            commentDiv.innerHTML = 'Comments'; // replace with your desired content
            div1.insertBefore(commentDiv, img); // insert the new div before the imageurl
        }
    });

    return commentButton;
}


// Create loading text and animation
const loading = document.createElement('div');
loading.className = 'loading';
loading.textContent = 'Loading';
card.appendChild(loading);




async function fetchImages(url, count) {
    const images = [];
    for(let i = 0; i < count; i++) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Images not found");
        }
        const data = await response.json();
        images.push(data.image);
    }
    return images;
}

function printImages(urls) {

    loading.remove();

    urls.forEach(url => {
        const img = createImageElement(url);

        const div1 = document.createElement('div');
        div1.className = 'card'; // add 'card' class to the div
        div1.appendChild(img);

        const div2 = document.createElement('div');
        div2.className = 'info'; // replace 'another-class' with your desired class name

        const likeButton = createLikeButton(img);
        div2.appendChild(likeButton);

        const commentButton = createCommentButton(div1, img);
        div2.appendChild(commentButton);

        div1.appendChild(div2); // append .info div to .card div
        card.appendChild(div1);
    });
}




// Fetch and display the images as the page is opened so its not empty at start
fetchImages(url, 20)
    .then(urls => printImages(urls))
    .catch(error => console.log(error));

// Button to load more images
document.querySelector('.btn').addEventListener('click', function() {
    fetchImages(url, 20)
        .then(urls => printImages(urls))
        .catch(error => console.log(error));
});