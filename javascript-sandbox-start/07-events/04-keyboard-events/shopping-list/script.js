const itemInput = document.getElementById('item-input')

const onKeyPress = (e) => console.log('keypress')
const onKeyUp = (e) => console.log('key up')
// const onKeyDown = (e) => console.log('key down')
const onKeyDown = (e) => {
	// key
	// if (e.key === 'Enter') {
	// 	alert('You pressed enter')
	// }

	// keyCode
	// https://www.toptal.com/developers/keycode/table
	// if (e.keyCode === 13) {
	// 	alert('You pressed Enter')
	// }

	// code
	if (e.code === 'Digit1') {
		console.log('You pressed 1')
	}

	// repeat - to check if they held down a key
	if (e.repeat) {
		console.log('You are holding down ' + e.key)
	}

	// shift, control, alt
	console.log(`Shift: ${e.shiftKey}`)
	console.log(`Control: ${e.ctrlKey}`)
	console.log(`Alt: ${e.altKey}`)

	// example, check if you click shift + k
	if (e.shiftKey && e.key === 'K') {
		console.log('You hit Shift + K')
	}
}

// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp)
itemInput.addEventListener('keydown', onKeyDown)
