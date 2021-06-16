function slidesPlugin(active) {
    const slides = document.querySelectorAll('.slide');

    slides[active].classList.add('active');

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
}

slidesPlugin(0)