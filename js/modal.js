const modal = () => {
	const requestBtn = document.querySelectorAll('.request-btn')
	const modalOverlay = document.querySelector('.modal-overlay')
	const modalPopup = document.querySelector('.modal__popup')
	console.log(modalOverlay)
	console.log(modalPopup)

	document.addEventListener('click', (e) => {
		if (e.target.classList.contains('request-btn')) {
			e.preventDefault()
			modalPopup.classList.add('opened')
			modalOverlay.style.display = "block"
		}
		if (e.target.classList.contains('modal-close') || e.target === modalOverlay) {
			modalPopup.classList.remove('opened')
			modalOverlay.style.display = "none"
		}
	})
}
modal()