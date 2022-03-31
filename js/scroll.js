'use strict'
const scroll = () => {

	const headerBlock = document.querySelector('.header')
	const headerMenu = document.querySelector('.header__top')
	const burgerMenu = document.querySelector('.header-burger__menu')
	const links = document.querySelectorAll('.header__nav a, .to-top')
	const btnToTop = document.querySelector('.to-top')

	const smoothScroll = (e, link) => {
		e.preventDefault()
		const id = link.getAttribute('href').substring(1)
		const section = document.getElementById(id)

		if (section) {
			seamless.scrollIntoView(section, {
				block: 'start',
				behavior: 'smooth',
				inline: 'center'
			})
		}
	}

	const scrollToTop = () => {
		let interval
		const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
		if (top > 0) {
			window.scrollBy(0, -100)
			interval = setTimeout(scrollToTop, 20)
		} else clearTimeout(interval)
		return false
	}

	const hideMenu = () => {
		if (window.pageYOffset > 300) {
			headerMenu.classList.add('invisible')
		} else {
			headerMenu.classList.remove('invisible')
		}
	}

	const showMenu = () => {
		if (window.pageYOffset > 300 && !burgerMenu.classList.contains('visible'))
			setTimeout(headerMenu.classList.add('invisible'), 1000)
	}

	links.forEach(link => {
		link.addEventListener('click', (e) => {
			e.preventDefault()
			if (e.target === btnToTop) scrollToTop()
			else smoothScroll(e, link)

		})
	})

	const showButton = () => {
		let headerFromTop = headerBlock.getBoundingClientRect()

		if (headerFromTop.bottom < 0) {
			btnToTop.classList.add('to-top--visible')
		} else {
			btnToTop.classList.remove('to-top--visible')
		}
	}

	window.addEventListener('scroll', () => {
		hideMenu()
		showButton()
	})

	document.addEventListener('mousemove', (e) => {
		if (e.clientY <= 120) headerMenu.classList.remove('invisible')
	})
	headerMenu.addEventListener('mouseleave', showMenu)
}
scroll()