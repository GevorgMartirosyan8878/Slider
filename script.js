const slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        removeActiveClasess();
        slide.classList.add('active')
    })
})

function removeActiveClasess() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}