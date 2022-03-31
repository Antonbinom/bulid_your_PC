const modal = () => {
	const modalOverlay = document.querySelector('.modal-overlay')
	const modalPopup = document.querySelector('.modal__popup')
	const btnBurger = document.querySelector('.burger-button')
	const modalInputs = document.querySelectorAll('.modal__form-input')

	const clearInputs = () => {
		modalInputs.forEach(input => {
			input.value = ''
			input.classList.remove('success', 'denied')
			input.style.boxShadow = ''
		})
	}

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('request-btn')) {
			e.preventDefault()
			modalPopup.classList.add('opened')
			modalOverlay.style.display = "block"
			document.body.classList.toggle('disabled')
			btnBurger.classList.toggle('shift')
		}
		if (e.target.classList.contains('modal-close') || e.target === modalOverlay) {
			modalPopup.classList.remove('opened')
			modalOverlay.style.display = "none"
			document.body.classList.toggle('disabled')
			btnBurger.classList.toggle('shift')
			clearInputs()
		}
	})
}
modal()