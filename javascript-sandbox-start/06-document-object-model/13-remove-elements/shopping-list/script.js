// remove & removeChild
// remove called on the element you want to remove
// remove child is called on the parent element and you pass in the element you want to remove

function removeClearButton() {
	const clearBtn = document.querySelector('#clear')
	clearBtn.remove()
}

function removeFirstItem() {
	const ul = document.querySelector('ul')
	const li = document.querySelector('li:first-child')

	ul.removeChild(li)
}

// remove dynamically
function removeItem(itemNumber) {
	const ul = document.querySelector('ul')
	const li = document.querySelector(`li:nth-child(${itemNumber})`)

	ul.removeChild(li)
}

// remove dynamically
function removeItem2(itemNumber) {
	const ul = document.querySelector('ul')
	const li = document.querySelectorAll('li')[itemNumber - 1]

	ul.removeChild(li)
}

// remove dynamically
function removeItem3(itemNumber) {
	const li = document.querySelectorAll('li')
	li[itemNumber - 1].remove()
}

removeClearButton()
removeFirstItem()
removeItem(2)
removeItem2(1)
removeItem3(1)
