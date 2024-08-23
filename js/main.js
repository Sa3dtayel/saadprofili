document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const logoNav = document.querySelector('.menu');
    const ulNav = document.querySelector('.ul-list ul');

    logoNav.addEventListener('click', () => {
        ulNav.classList.toggle('active');
    });
});