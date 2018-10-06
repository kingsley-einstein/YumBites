const slider = document.getElementById('slider');
const indicators = document.getElementsByClassName('slide-indicator');
const images = [
    'img/burrito.jpeg',
    'img/chicken.jpg',
    'img/cuisine1.jpg',
    'img/cuisine2.jpg',
    'img/pizza.jpg',
    'img/waffles.jpg',
    'img/cuisine3.jpg'
];
let image = 0;
//let currentImage = 0;

const slide = () => {

    if (image > images.length) {
        image = 0;
    }

    currentImage = image;
    
    if (typeof images[image] !== 'undefined') {
        slider.style.backgroundImage = "url("+images[image]+")";
    }

    if (typeof indicators[image - 1] !== 'undefined' || image - 1 === images.length) {
        indicators[image - 1].style.backgroundColor ="transparent";
    }

    if (typeof indicators[image] !== 'undefined' || image === 0) {
        indicators[image].style.backgroundColor = "gray";
    }

    image = image + 1;

     setTimeout(slide, 8000);


}

slide();