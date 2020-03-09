'use strict';

window.addEventListener('load', () => {
    const slider = new Slider();
    const images = slider.images;
    slider.init(images);
    slider.addListener();
    setInterval(() => slider.run(), 3000);
});

class Slider {
    constructor() {
        this.images = [
            'url("img/С172/с182-00.jpg")',
            'url("img/С172/с182-01.jpg")',
            'url("img/С172/с182-02.jpg")',
            'url("img/С172/с182-03.jpg")'
        ];
        this.items = document.querySelectorAll('.slider__item');
        this.currentSlideIndex = 0;
        this.sliderCtrl = document.querySelectorAll('.slider__ctrl');
    }

    init(imgArr) {
        this.items.forEach(function (slide, i) {
            slide.style.backgroundImage = imgArr[i];
            if (!(i === 0)) {
                slide.classList.add('hidden');
            }
            //slide.style.zIndex = i * (-1);
        })
    }

    hideSlide(id) {
        this.items[id].classList.add('hidden');
    }

    changeIndex(direction = 'up') {
        if (this.currentSlideIndex >= this.items.length - 1) {
            this.currentSlideIndex = 0;
        } else {
            if (direction === 'down') {
                this.currentSlideIndex--;
                if (this.currentSlideIndex < 0) {
                    this.currentSlideIndex = this.items.length - 1;
                }
            } else {
                this.currentSlideIndex++;
            }

        }
    }

    removeClasses(index = this.currentSlideIndex) {
        this.items[index].classList.remove('hidden', 'move-right', 'move-left');
    }

    ChangeCurrentSlide(direction = 'move-right') {
        let currentSlide = this.items[this.currentSlideIndex];
        currentSlide.classList.add(direction);
    }

    run(direction = 'up') {
        //setTimeout(this.ChangeCurrentSlide.bind(this), 2000);
        this.ChangeCurrentSlide();
        this.changeIndex(direction);
        this.removeClasses();
    }

    addListener() {
        this.sliderCtrl.forEach(item => item.addEventListener('click', this.move));
    }

    move(event) {


    }

}

