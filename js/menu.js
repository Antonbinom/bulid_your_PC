const menu = () => {
	const menuBurger = document.querySelector('.header-burger__menu')
	const btnBurger = document.querySelector('.burger-button')

	document.addEventListener('click', (e) => {
		if (e.target.closest('.burger-button') || e.target.matches('.header__nav--hidden a') || e.target.matches('.header-btn--hidden')) {
			e.preventDefault()
			menuBurger.classList.toggle('visible')
			document.body.classList.toggle('disabled')
		}
		if (document.body.classList.contains('disabled')) btnBurger.classList.add('shift')
		else btnBurger.classList.remove('shift')
	})

	window.addEventListener('resize', () => {
		if (innerWidth > 991 && menuBurger.classList.contains('visible')) {
			menuBurger.classList.remove('visible')
			document.body.classList.remove('disabled')
			btnBurger.classList.add('shift')
		}
	})
}

menu()