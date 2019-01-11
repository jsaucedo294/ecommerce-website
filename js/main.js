const menuBtn = document.querySelector('.menu-toggle');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.nav-item');

menuBtn.addEventListener('click', toggleMenu);

let btnToggled = false;
function toggleMenu(){
    if (!btnToggled) {
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));
        btnToggled = true;
        console.log('works!');
    } else {
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));
        btnToggled = false;
    }
}
$('.carousel').carousel({
    interval: false
});
