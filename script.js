let button = document.querySelector(".button");
let popup = document.querySelector(".popup");
let close = document.querySelector(".close-btn");
let prodBtn = document.querySelectorAll('.product__btn');

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

button.addEventListener('click', hide);
close.addEventListener('click', hide);

// Chess
let startDiv = document.querySelector('.lesson5-5');
let createDeskBtn = document.querySelector('.btn-new-desk');

createDeskBtn.addEventListener('click', createNewDesk);

function createNewDesk() {
    let deskCaption = ['','A','B','C','D','E','F','G','H']; //'H','G','F','E','D','C','B','A',''
    let whiteChess = ['1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;'];
    let blackChess = ['8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;'];
    startDiv.insertAdjacentHTML('afterbegin', '<div class="chess"></div>');
    let chessDiv = document.querySelector('.chess');
    for (let i=0; i <9; i++) {
        chessDiv.insertAdjacentHTML('afterbegin', '<div class="col"></div>');
    }
    chessDiv.childNodes.forEach(function (element, j) {
        if (j === 0) {
            for (let elem of deskCaption) {
                element.insertAdjacentHTML('beforeend', '<div class="cel">'+elem+'</div>');

            }
        } else if (j === 1) {
            for (let elem of whiteChess) {
                element.insertAdjacentHTML('beforeend', '<div class="cel">'+elem+'</div>');
            }
        } else if (j === 8) {
            for (let elem of blackChess) {
                element.insertAdjacentHTML('beforeend', '<div class="cel">'+elem+'</div>');
            }

        } else {
            for (let i = 0; i < 9; i++) {
                if (i===0) {
                    element.insertAdjacentHTML('beforeend', '<div class="cel">' + j + '</div>');
                } else if (j === 2 ) {
                    element.insertAdjacentHTML('beforeend', '<div class="cel">&#9817;</div>');
                } else if (j === 7 ) {
                    element.insertAdjacentHTML('beforeend', '<div class="cel">&#9823;</div>');
                } else {
                    element.insertAdjacentHTML('beforeend', '<div class="cel"></div>');
                }

            }
        }
    });
    createDeskBtn.classList.toggle('hidden');
}