const logo = document.querySelector('img')

const onClick = (e) => {
	// console.log(e)
	// console.log(e.target)
	// console.log(e.currentTarget)
	// console.log(e.type)
	// console.log(e.timeStamp)
	// console.log(e.clientX)
	// console.log(e.clientY)
	// console.log(e.offsetX)
	// console.log(e.offsetY)
	// console.log(e.pageX)
	// console.log(e.pageY)
	// console.log(e.screenX)
	// console.log(e.screenY)
}

const onDrag = (e) => {
	document.querySelector(
		'h1'
	).textContent = `x = ${e.clientX}, y = ${e.clientY}`
}

logo.addEventListener('click', onClick)
logo.addEventListener('drag', onDrag)

// difference between target and currentTarget
// document.body.addEventListener('click', (e) => {
// 	console.log(e.target) // shows the current target where the mouse hit
// 	console.log(e.currentTarget) // show the body, because the event is bobbled up to the body (the place where the event is added on), starting from the curent hit place (element)
// })

document.querySelector('a').addEventListener('click', (e) => {
	e.preventDefault()
	console.log('Link was clicked')
})

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element (clicked element)
- `offsetY` - The y position of the mouse click relative to the element (clicked element)
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen (entire monitor)
- `screenY` - The y position of the mouse click relative to the screen (entire monitor)
*/
