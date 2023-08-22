const form = document.getElementById('item-form')

const onSubmit = (e) => {
	e.preventDefault()

	const item = document.getElementById('item-input').value
	const priority = document.getElementById('priority-input').value

	if (item === '' || priority === '0') {
		alert('Please fill in all fields')
		return
	}

	console.log(item, priority)
}

const onSubmit2 = (e) => {
	e.preventDefault()

	const formData = new FormData(form)

	// const item = formData.get('item') // the 'item' in get method is the name given to the input in the from in the HTML file
	// const priority = formData.get('priority') // the 'priority' in get method is the name given to the select input in the from in the HTML file

	// console.log(item, priority)

	const entries = formData.entries()
	console.log(entries) // returns FormData Iterator

	for (let entry of entries) {
		console.log(entry) // get the whole array of entries
		console.log(entry[0]) // get the keys (name of the input)
		console.log(entry[1]) // get the values
	}
}

form.addEventListener('submit', onSubmit2)
