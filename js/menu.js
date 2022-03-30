const menuBurger = document.querySelector('.header-burger__menu')
const btnBurger = document.querySelector('.burger-button')
btnBurger.addEventListener('click', (e) => {
	e.preventDefault()
	if (e.target.closest('.burger-button') || e.target.matches('.header__nav--hidden a')) {
		menuBurger.classList.toggle('visible')
		document.body.classList.toggle('disabled')
	}
})

window.addEventListener('resize', () => {
	if (innerWidth > 991) {
		menuBurger.classList.remove('visible')
		document.body.classList.remove('disabled')
	}
})