'use strict'

const menu = document.querySelector('.header-burger__menu')

document.addEventListener('click', (e) => {
	e.preventDefault()
	if (e.target.closest('.burger-button') || e.target.matches('.header__nav--hidden a')) {
		menu.classList.toggle('visible')
		document.body.classList.toggle('disabled')
	}
})

window.addEventListener('resize', () => {
	if (innerWidth > 991) {
		menu.classList.remove('visible')
		document.body.classList.remove('disabled')
	}
})