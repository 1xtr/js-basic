let button = document.querySelector(".button");
let popup = document.querySelector(".popup");
let close = document.querySelector(".close-btn");
let prodBtn = document.querySelectorAll('.product__btn');
let prodMoreInfo = document.querySelectorAll('.product__more');

prodBtn.forEach(function (element) {
    element.addEventListener('click', function (event) {
        let targetDiv = event.target.previousElementSibling.children;
        for (el of targetDiv) {
            if (el.classList.contains('product__more')) {
                el.classList.toggle('product__more_active');
            }
        }
    });
});

function hide() {
    button.classList.toggle("hidden");
    popup.classList.toggle("hidden");
}

// function moreInfo() {
//     prodMoreInfo.classList.toggle('product__more_active');
// }

button.addEventListener('click', hide);
close.addEventListener('click', hide);
