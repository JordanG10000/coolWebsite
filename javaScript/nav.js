const nav = document.querySelector(".nav");

window.addEventListener('scroll', () => {
    if (scrollY >= 420) {
        nav.classList.add('active');
    }
    else {
        nav.classList.remove('active');
    }
})
