const button = document.querySelector('form button')
const div = document.querySelector('form div:nth-child(2)') // this element is the parent of the button element
const form = document.querySelector('form')

button.addEventListener('click', (e) => {
	alert('Button was clicked')
	e.stopPropagation()
	// e.stopImmediatePropagation() // you use this if you have multiple handlers on a single event and you want to stop the event for all of them
})

div.addEventListener('click', (e) => {
	alert('Div was clicked') // this will also fire when the above is clicked
})

form.addEventListener('click', () => {
	alert('Form was clicked')
})

document.body.addEventListener('click', () => {
	alert('Body was clicked')
})
