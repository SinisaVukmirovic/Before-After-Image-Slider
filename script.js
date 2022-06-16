const container = document.querySelector('.container');
const slider = document.querySelector('.slider');

slider.addEventListener('input', e => {
    container.style.setProperty('--position', `${e.target.value}%`);
});