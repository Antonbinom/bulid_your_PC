const sendForm = () => {

	const form = document.querySelector('form')
	const modalOverlay = document.querySelector('.modal-overlay')
	const modalPopup = document.querySelector('.modal__popup')
	const btnBurger = document.querySelector('.burger-button')
	const modalMessage = modalPopup.querySelector('.modal-message')

	const validate = (list) => {
		let success = true;
		list.forEach(input => {
			if (!input.classList.contains('success')) {
				success = false;
			}
		});
		return success;
	};

	const closeModal = (inputs) => {
		modalPopup.classList.remove('opened')
		modalOverlay.style.display = "none"
		document.body.classList.toggle('disabled')
		btnBurger.classList.toggle('shift')
		clearForm(inputs)
	}

	const messageWrong = () => {

		modalMessage.style.color = '#c7055f'
		modalMessage.textContent = 'Ошибка при отправке данных!'
	}
	const messageSuccess = () => {
		modalMessage.style.color = '#16cc6b'
		modalMessage.textContent = 'Данные отправлены!'
	}
	const messageProcess = () => {
		modalMessage.style.color = '#e6df08'
		modalMessage.textContent = 'Отправка данных...'
	}
	const clearForm = (inputs) => {
		inputs.forEach(input => {
			input.value = ''
			input.classList.remove('success', 'denied')
			input.style.boxShadow = ''
			modalMessage.textContent = ''
		})
	}

	const sendData = (data) => {
		return fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(responsive => responsive.json())
	};

	const submitForm = (form) => {
		const formInputs = form.querySelectorAll('input')
		const formData = new FormData(form)
		const formBody = {}

		formData.forEach((val, key) => {
			formBody[key] = val
		});

		if (validate(formInputs)) {
			messageProcess()
			sendData(formBody)
				.then(data => {
					console.log(data);
					messageSuccess()
					setTimeout(() => {
						closeModal(formInputs)
					}, 2000)
				})
				.catch(error => {
					console.log(error)
					messageWrong()
				});
		} else {
			formInputs.forEach(input => {
				if (input.value === '') {
					input.style.boxShadow = "0 0px 10px #e00000"
				}
			});
		}
	}

	form.addEventListener('submit', (event) => {
		event.preventDefault()
		submitForm(form)
	})
}
sendForm()