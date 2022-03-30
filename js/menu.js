const menu = () => {
	const menuBurger = document.querySelector('.header-burger__menu')
	const btnBurger = document.querySelector('.burger-button')

	document.addEventListener('click', (e) => {
		if (e.target.closest('.burger-button') || e.target.matches('.header__nav--hidden a')) {
			e.preventDefault()
			menuBurger.classList.toggle('visible')
			document.body.classList.toggle('disabled')
		}
		if (document.body.classList.contains('disabled')) btnBurger.style.marginRight = 14 + "px"
		else btnBurger.style.marginRight = 0
	})

	window.addEventListener('resize', () => {
		if (innerWidth > 991) {
			menuBurger.classList.remove('visible')
			document.body.classList.remove('disabled')
			btnBurger.style.marginRight = 0
		}
	})
}



menu()