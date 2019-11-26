// const sliderContent = document.querySelector('.slider__content');
// const previous = document.querySelector('.left');
// const next = document.querySelector('.right');
// let x = 0;
// previous.addEventListener('click', () => {
//     x -= 800;
//     sliderContent.style.transform = `translateX(${x}px)`;
// })
// next.addEventListener('click', () => {
//     x += 800;
//     sliderContent.style.transform = `translateX(${x}px)`;
// })

const slider = {
    sliderContent: document.querySelector('.slider__content'),
    previousElement: document.querySelector('.left'),
    nextElement: document.querySelector('.right'),
    x: 0,

    animation: function() {
        this.sliderContent.style.transform = `translateX(${this.x}px)`;
    },

    previous: function() {
        this.x -= 1000;
        this.animation();
    },

    next: function() {
        this.x += 1000;
        this.animation();
    },

    init: function() {
        this.previousElement.addEventListener('click',this.previous.bind(this));
        this.nextElement.addEventListener('click',this.next.bind(this));
    }
}

slider.init();