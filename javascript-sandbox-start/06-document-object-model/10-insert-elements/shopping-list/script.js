// Other methods than appendChild()
// These 3 works like innerHTML
// insertAdjacentElement Example
function insertElement() {
	const filter = document.querySelector('.filter')

	const h1 = document.createElement('h1')
	h1.textContent = 'insertAdjacentElement'

	filter.insertAdjacentElement('beforebegin', h1)
}

// insertAdjacentText Example
function insertText() {
	const item = document.querySelector('li:first-child')

	item.insertAdjacentText('beforebegin', 'insertAdjacentText')
}

// insertAdjacentHTML example
function insertHTML() {
	const clearBtn = document.querySelector('#clear')

	clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>')
}

// insertBefore Example
function insertBeforeItem() {
	// select parent element
	const ul = document.querySelector('ul')

	// create new element to be added
	const li = document.createElement('li')
	li.textContent = 'insertBefore'

	// select child element of the parent - to insert before
	const thirdItem = document.querySelector('li:nth-child(3)')

	// insert before
	ul.insertBefore(li, thirdItem)
}

insertElement()
insertText()
insertHTML()
insertBeforeItem()

// The position on the element of where you are going to add the new element
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
