window.onload = function() {
    document.getElementById('lastUpdated').textContent = new Date().toLocaleString();
    document.body.style.opacity = 0;
    window.setTimeout(function() {
        document.body.style.opacity = 1;
    }, 500);
}

document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('mouseover', () => {
        const submenu = item.querySelector('.submenu');
        submenu.classList.add('active');
    });

    item.addEventListener('mouseout', () => {
        const submenu = item.querySelector('.submenu');
        submenu.classList.remove('active');
    });
});


