const scroll = () => {

	const links = document.querySelectorAll('.header__nav a')

	links.forEach(link => {
		link.addEventListener('click', (e) => {
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
		})
	})
}

scroll()