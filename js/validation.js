const validation = () => {

	const inputs = document.querySelectorAll('input')
	const forms = document.querySelectorAll('form')

	const phoneMask = (input) => {
		window.addEventListener("DOMContentLoaded", function () {
			function setCursorPosition(pos, elem) {
				elem.focus();
				if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
				else if (elem.createTextRange) {
					const range = elem.createTextRange();
					range.collapse(true);
					range.moveEnd("character", pos);
					range.moveStart("character", pos);
					range.select();
				}
			}

			function mask(event) {

				let matrix = "+7 (___) ___-__-__",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, "");
				if (def.length >= val.length) val = def;
				this.value = matrix.replace(/./g, function (a) {
					return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
				});
				if (event.type == "blur") {
					if (this.value.length == 2) this.value = ""
				} else setCursorPosition(this.value.length, this)
			};

			input.addEventListener("input", mask, false);
			input.addEventListener("focus", mask, false);
			input.addEventListener("blur", mask, false);
		})
	}

	const success = (item) => {
		item.classList.add('success');
		item.classList.remove('denied');
	};

	const denied = (item) => {
		item.classList.remove('success');
		item.classList.add('denied');
	};

	const empty = (item) => {
		item.classList.remove('success');
		item.classList.remove('denied');
		item.style.boxShadow = "";
		item.value = ""
	}

	const checkInput = (input, reg) => {
		let item = input.value;
		let valid = reg.test(item);
		if (valid) success(input);
		else if (input.value == 0 || input.value === '+7') empty(input);
		else denied(input);
		return valid;
	};

	inputs.forEach(input => {
		if (input.name === 'phone') {
			phoneMask(input)
		}
		input.addEventListener('input', (e) => {
			if (e.target.name === 'name') {
				e.target.value = e.target.value.replace(/[^а-яa-z\ ]/gi, "")
			} else if (e.target.name === 'email') {
				e.target.value = e.target.value.replace(/[^\@\-\_\.\!\~\*\'\w]/gi, "")
			}
		})
	})

	forms.forEach((form) => {
		form.addEventListener('change', (e) => {
			if (e.target.name === 'phone') {
				let reg = /^\+\d[\d\(\)\ -]{8,15}\d$/;
				checkInput(e.target, reg);

			} else if (e.target.name === 'email') {
				let reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
				checkInput(e.target, reg);

			} else if (e.target.name === 'name') {
				e.target.value = e.target.value.trim().toLowerCase().replace(/([\ ]|^)([а-яёa-z])/g, (str) => {
					return str.toUpperCase();
				});
				let reg = /^[а-яa-z\ ]{2,15}$/i;
				checkInput(e.target, reg);
			}
		});
	});
};

validation()