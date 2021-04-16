const CAROUSEL_TRIGGERS = document.getElementsByClassName('shift');
const SLIDES = document.getElementsByClassName('slide');
const FOCUSED_CLASS = 'active';

for (item of CAROUSEL_TRIGGERS) {
    item.addEventListener('click', function () {
        const activeSlide = document.getElementsByClassName(`${FOCUSED_CLASS}`)[0]
        let next = this.id === 'shift-left' ? activeSlide.nextElementSibling || SLIDES[0] : activeSlide.previousElementSibling || SLIDES[SLIDES.length - 1];
        activeSlide.classList.remove(FOCUSED_CLASS);
        next.classList.add(FOCUSED_CLASS);
    })
}
