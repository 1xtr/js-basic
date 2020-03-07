'use strict';

window.addEventListener('load', () => {
    const slider = new Slider();
    slider.run();

});

class Slider {
    constructor() {
        this.images = [
            'url("img/С172/Cessna-182-Skylane-T.jpg")',
            'url("img/С172/с182-01.jpg")',
            'url("img/С172/с182-02.jpg")'
        ];
        this.currentImage = 0;
        this.container = document.querySelector('.slider');
        this.addListener = this.container.addEventListener('click', this.slideDirection);
        this.sliderCtrl = document.querySelector('.slider__ctrl');
    }

    slideDirection(event) {
        if (event.target.classList.contains('slider__ctrl_left')) {
            return 'left';
        } else {
            return 'right';
        }

    }
    nextImage() {
        let nexEl = this.currentImage++;
        let imgCount = this.images.length;
        if  (nexEl < imgCount) {
            return nexEl;
        } else {
            return this.currentImage = 0;
        }
    }

    ChangeCurrentImage() {
        this.container.style.backgroundImage  = this.images[this.nextImage()];
    }
    run() {
        setInterval(this.ChangeCurrentImage.bind(this), 2000);
    }
}

