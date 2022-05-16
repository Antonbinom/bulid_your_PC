const timer = (deadline) => {

	const timerItems = document.querySelectorAll('.timer-number')
	const countName = document.querySelectorAll('.timer-text')

	const timing = () => {
		let dateStop = new Date(deadline).getTime()
		let dateNow = new Date().getTime()
		let timeGap = (dateStop - dateNow) / 1000
		let days = Math.floor(timeGap / 60 / 60 / 24)
		let hours = Math.floor(timeGap / 60 / 60) % 24
		let minutes = Math.floor(timeGap / 60) % 60
		let seconds = Math.floor(timeGap % 60)
		return {
			timeGap,
			days,
			hours,
			minutes,
			seconds
		}
	}

	const wordDeclension = (name, value, className) => {
		countName.forEach(item => {
			if (item.classList.contains(`${className}`)) {
				if (value % 10 > 1 && value % 10 < 5) item.textContent = name[0];
				else if (value % 10 == 1 && value != 11) item.textContent = name[1];
				else item.textContent = name[2];
			}
		})
	}

	const timeReload = () => {
		let getTime = timing()

		timerItems.forEach(item => {
			const daysArr = ['Дня', 'День', 'Дней']
			const hoursArr = ['Часа', 'Час', 'Часов']
			const minutesArr = ['Минуты', 'Минута', 'Минут']
			const secondsArr = ['Секунды', 'Секунда', 'Секунд']

			if (item.classList.contains('days-number')) {
				item.textContent = getTime.days
				wordDeclension(daysArr, item.textContent, 'days-name')
			}
			if (item.classList.contains('hours-number')) {
				item.textContent = getTime.hours
				wordDeclension(hoursArr, item.textContent, 'hours-name')
			}
			if (item.classList.contains('minutes-number')) {
				item.textContent = getTime.minutes
				wordDeclension(minutesArr, item.textContent, 'minutes-name')
			}
			if (item.classList.contains('seconds-number')) {
				item.textContent = getTime.seconds
				wordDeclension(secondsArr, item.textContent, 'seconds-name')
			}
			if (item.textContent.length < 2) {
				item.textContent = "0" + item.textContent
			}
		})
	}

	let getTime = timing()
	let idInterval = setInterval(() => {
		if (getTime.timeGap > 0) {
			timeReload()
		} else {
			clearTimeout(idInterval)
		}
	}, 1000)
}

timer('02 april 2023')