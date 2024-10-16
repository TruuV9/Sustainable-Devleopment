window.onscroll = function() {
    updateProgressBar();
    updateNavbar();
};

const bar = document.querySelector('#progress-con div');
const nav = document.getElementById('nav');

function updateProgressBar() {
    const scrollPosition = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollPosition / windowHeight) * 100;
    bar.style.width = scrolled + '%';
}
const pros = document.getElementById('pros');
const hiddenMenu = pros.querySelector('.hidden');
let timeoutId;

pros.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    hiddenMenu.style.display = 'flex';
});

pros.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        hiddenMenu.style.display = 'none';
    }, 150);
});

hiddenMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
});

hiddenMenu.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
        hiddenMenu.style.display = 'none';
    }, 150);
});
