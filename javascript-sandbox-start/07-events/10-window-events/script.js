// window.onload = function () {
// 	document.querySelector('h1').textContent = 'Hello World'
// }

window.addEventListener('load', () => {
	document.querySelector('h1').textContent = 'Hello World'
	console.log('Page Loaded') // this will display last since it waits for all of the content including the DOM to load
})

window.addEventListener('DOMContentLoaded', () => {
	document.querySelector('h1').textContent = 'Hello World'
	console.log('DOM Loaded') // this will display first since it will fire when the DOM parses
})

console.log('Run me') // won't work if the script tag hadn't been on top (in heading) // but will start to work when you add defer in the script tag as an attribute

window.addEventListener('resize', () => {
	document.querySelector(
		'h1'
	).innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}` // will work even if the script in on top because of defer attribute
})

window.addEventListener('scroll', () => {
	console.log(`Scrolled: ${window.screenX} x ${window.screenY}`)

	if (window.scrollY > 30) {
		document.body.style.backgroundColor = 'black'
		document.body.style.color = 'white'
	} else {
		document.body.style.backgroundColor = 'white'
		document.body.style.color = 'black'
	}
})

window.addEventListener('focus', () => {
	document.querySelectorAll('p').forEach((p) => {
		p.style.color = 'orange'
	})
})

window.addEventListener('blur', () => {
	document.querySelectorAll('p').forEach((p) => {
		p.style.color = 'green'
	})
})
