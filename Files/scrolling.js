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


