// JavaScript
// Efecto de desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Resaltar enlaces activos
window.addEventListener('scroll', function () {
	let fromTop = window.scrollY;

	document.querySelectorAll('.menu a').forEach(link => {
		let section = document.querySelector(link.hash);

		if (
			section.offsetTop <= fromTop &&
			section.offsetTop + section.offsetHeight > fromTop
		) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
});

window.onload = function() {
    document.getElementById('lastModified').textContent = document.lastModified;
}

document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('show');
});